import { useState } from "react";
import axios from "axios";

const Login = () => {
    const[codigo, setCodigo] = useState('')
    const[password, setPassword] = useState('')

    const handleChargeCodigo = (e) =>{
        setCodigo(e.target.value)
    }
    const handleChargePasword = (e)=>{
        setPassword(e.target.value)
    }
    const handelerLogin= (e)=>{
        e.preventDefault();
        axios.post('http://localhost:3000/login',{
            carnet: codigo,
            password: password
        }).then(response=>{ 
            if(response.data.ok === true){
            alert(response.data.msg)
            window.location.href = '/publicaciones'
            localStorage.setItem('usuario', JSON.stringify(response.data.user))
        }else{
            alert(response.data.msg)
        }
        })       
    }
    return(
        <>
        <div className="container blue lighten-4"
                style={{padding: '2%', marginTop: '4%' }}>

                <h1>Inicio de sesion</h1>
        
        <div className="row">
            <div className="col s12">
                    <div className="card" style={{padding: '3%'}}>
                        <form id="form" onSubmit={handelerLogin}>
                            <div className="card-content">
                                <input type="text" placeholder="Ingrese codigo/ carnet" onChange={handleChargeCodigo}/>
                            </div>
                            <div className="card-content">
                                <input type="password" placeholder="Ingrese constraseña" onChange={handleChargePasword}/>
                            </div>
                            <div className="card-action">
                                <button className="btn waves-effect waves-light" type="submit">Log in</button>
                            </div>
                        </form> 
                    </div>
                </div> 
            </div>
        </div> 
    </>
    )
}

export default Login;