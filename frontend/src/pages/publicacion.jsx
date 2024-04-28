import axios from "axios";
import { useEffect, useState } from "react"
import Publicaciones from "./publicaciones";
import Navigation from "./NavBar";
 const Publicacion =()=> {
    const [publicaciones, setPublicaciones] = useState([])
    const obtenerPublicaciones =(e) =>{
        axios.get('http://localhost:3000/verPost',{})
        .then(respose => {
            console.log(respose.data)
            setPublicaciones(respose.data)
        }).catch(error => console.log(error))
    }
    useEffect(()=> {
        obtenerPublicaciones()
    }, [])

    return(
        <>
         <Navigation/>

        {publicaciones.map(publicacion =>{
            return(
                <>
                <Publicaciones
                idPublicacion = {publicacion.idPublicacion}
                carnet ={publicacion.carnet}
                nombre ={publicacion.nombre}
                descripcion = {publicacion.descripcion}
                imagen ={publicacion.imagen}/>

                </>
            )
        })}
        </>
    )
 }
 export default Publicacion;