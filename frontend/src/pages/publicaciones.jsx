import { useEffect, useState } from "react"
import axios from "axios"
const Publicaciones = (props) => {
    
    return(
    <>
       
        <div className="container">
            <div className="col s12 m6 offset-m2 "> 
                 <div className="card">
                    <div className="card-imagen">
                      <img src = {"data:image/png;base64," +  props.imagen} />
                        <div className="card-content">
                        <p>{props.carnet}</p>
                      
                        <p>{props.descripcion}</p>
                        </div>
                        <div className="card-content">
                                <button className="btn waves-effecct weves-ligth">Comentarios</button>  
                        </div> 
                      </div> 
                </div>
            </div>
        </div>
    </>
    )
}
export default Publicaciones;