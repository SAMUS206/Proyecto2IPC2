import { useState } from "react";
import Navigation from "./NavBar";
import axios from "axios";

const CreatePost = () => {
    const{carnet, nombre, apellido, genero, facultad, carrera, correo, password} = JSON.parse(localStorage.getItem('usuario'))

    const [imagenB64, setImagenB64] = useState("")
    const [descripcion, setDescripcion] = useState("")
    
    const handleChargeDescripcion = (e) =>{
        setDescripcion(e.target.value)
    }
    const registrarPublicacion = (e) =>{
        e.preventDefault();
        axios.post('http://localhost:3000/crearpublicacion', {
            carnet: carnet,
            descripcion: descripcion, 
            imagen: imagenB64,
        }).then(response => {
            alert(response.data.msg)
        }).catch(error=> {console.log(error)})
    }
    const convertToBase64 = (file) =>{
        return new Promise((resolve, reject) =>{
            const fileReader = new FileReader();
            fileReader.readAsDataURL(file);
            fileReader.onload = () =>{
                resolve(fileReader.result.split(',')[1]);
            }
            fileReader.onerror = (error) =>{
                reject(error);
            }
        })
    }
   
    const handleFileImageUpload = async (e) => {
        const file = e.target.files[0];
        const base64 = await convertToBase64(file);
        setImagenB64(base64)
        console.log(base64)
    } 
  
    return(
    <>
    
    <Navigation/>
    <div className="container blue lighten-4"  
        style={{padding: '2%', marginTop: '4%' }}> 
        
            <div className="row"> 
                <div className="col s12">
                    <div className="card" style={{padding: '3%'}}>
                        <form id="form" onSubmit={registrarPublicacion}>
                            <div><h1 className="blue-text text-darken-2">Crear Publicacion </h1></div>
                            <div className="card-content">
                                <textarea onChange={handleChargeDescripcion}/>
                            </div>
                        <div className="card-content">
                            <input type="file" onChange={handleFileImageUpload}/>
                        </div>
                        <div><button className="btn waves-effect waves-light" type="submit">Publicar</button>
                    </div>        
                </form> 
            </div>
        </div>
    </div>
</div>
    </>
)
}

export default CreatePost;

