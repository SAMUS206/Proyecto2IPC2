import NavAdmin from "./navAdmin";
import {useState} from 'react';
import axios from "axios";

const Administrador = () =>{

    const [json, setJson] = useState([])

    const fileJSON = (e) => {
        if (e.target.files.length === 0) {
            console.log('No file selected.');
            return;
        }
    
        const fileReader = new FileReader();
        fileReader.readAsText(e.target.files[0], "UTF-8");
        fileReader.onload = (event) => {
            try {
                const jsonData = JSON.parse(event.target.result);
                setJson(jsonData);
            } catch (error) {
                console.error('Error parsing JSON!', error);
            }
        }
        fileReader.onerror = (error) => {
            console.error('Error reading file:', error);
        }
    }
    
return(
    <> <NavAdmin/>
        <div className="container blue lighten-4">
        <input type= "file" onChange={fileJSON}/>
        <div>
        <table>
            <thead>
                <tr>
                    <td>Carnet</td>
                    <td>Nombre</td> 
                </tr>
            </thead>
            <tbody className ="conteiner white" >
                <tr>
                    {json.map(item => {
                        return (
                            <>
                            <tr>
                            <td>{item.carnet}</td>
                            <td>{item.nombre}</td>
                            </tr>
                            </>
                    )
                    })}
                </tr>
            </tbody>
        </table>
        </div> 
        </div>
        
    
    </>
)
}
export default Administrador