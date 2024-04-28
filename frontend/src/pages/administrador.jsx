import NavAdmin from "./navAdmin";
import {useState} from 'react';
import axios from "axios";

const Administrador = () =>{

    const [json, setJson] = useState([])

    const fileJSON = (e) => {
        const fileReader = new FileReader();
        fileReader.readAsText(e.target.file[0], "UTF-8")
        fileReader.onload = (event) => {
                const jsonData = JSON.parse(event.target.result)
                setJson(jsonData)
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