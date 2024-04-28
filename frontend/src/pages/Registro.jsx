import { useEffect, useState } from "react";
import axios from 'axios';

const Registro = () =>{
    const [carnet, setCarnet] = useState('')
    const [nombre, setNombre] = useState('')
    const [apellido, setApellido] = useState('')
    const [facultad, setFacultad] = useState('')
    const [carrera, setCarrera] = useState('')
    const [correo, setCorreo] = useState('')
    const [password, setPassword] = useState('')
    const [genero, setGenero] = useState('')

    const handleChargeCarnet = (e) =>{
        setCarnet(e.target.value)
    }
    const handleChargeNombre = (e) =>{
        setNombre(e.target.value)
    }
    const handleChargeApellido = (e) =>{
        setApellido(e.target.value)
    }
    const handleChargeFacultad = (e) =>{
        setFacultad(e.target.value)
    }
    const handleChargeCarrera = (e) =>{
        setCarrera(e.target.value)
    }
    const handleChargeCorreo = (e) =>{
        setCorreo(e.target.value)
    }
    const handleChargePassword = (e) =>{
        setPassword(e.target.value)
    }
    const handleChargeGenero = (e) =>{
        setGenero(e.target.value)
    }
    const hoandleRegistro = (e) =>{
        e.preventDefault();
        axios.post('http://localhost:3000/singinUsers',{
            carnet: carnet,
            nombre: nombre,
            apellido: apellido,
            genero: genero,
            facultad: facultad,
            carrera: carrera,
            correo: correo, 
            password: password
        }).then(response=>{
            alert(response.data.msg)
        }).catch(error => {
            console.log(error)
        })       
    }
    return(
        <>
        <div className="container blue lighten-4"
                style={{padding: '2%',marginTop: '4%'}}>
                <h1>Registro de Usuarios</h1>
       
        <div className="row">
            <div className="col s10">
                    <div className="card" style={{padding: '1%', marginLeft: '20%'}}>
                        <form id="form" onSubmit={hoandleRegistro}> 
                            <div className="card-content">
                                <input type="text" placeholder="Ingrese codigo/ carnet" onChange={handleChargeCarnet}/>
                            </div>
                            <div className="card-content">
                                <input type="text" placeholder="ingrese su nombres" onChange={handleChargeNombre}/>
                            </div>
                            <div className="card-content">
                                <input type="text" placeholder="Ingrese su apellidos" onChange={handleChargeApellido}/>
                            </div>
                            <div className="card-content">
                                <input type="text" placeholder="Ingrese la Facultad a la que pertenece" onChange={handleChargeFacultad}/>
                            </div>
                            <div className="card-content">
                                <input type="text" placeholder="Ingrese la carrera que esta cursando" onChange={handleChargeCarrera}/>
                            </div>
                            <div className="card-content">
                                <input type="text" placeholder="Ingrese su correo" onChange={handleChargeCorreo}/>
                            </div>
                            <div className="card-content">
                                <input type="password" placeholder="Ingrese una constraseña" onChange={handleChargePassword}/>
                                </div>
                            <div className="card-action">
                            <button className="btn waves-effect waves-light"
                            type="submit">Log in</button>
                        </div>
                    </form> 
                </div>
            </div>
        </div>      
    </div>
</>
    )
}
export default Registro;