import { Link } from "react-router-dom";

const Navigation = () => {
    const handlerLogOut = () => {
        localStorage.removeItem('usuario')
    }
    return (
    <>   
        <nav class="nav-extended">
        <nav className ="blue darken-1">
            <div className="nav-wrapper">
            <a href="#" class="brand-logo right"></a>
                <ul id = "nav-mobile" className="lift hide-on-med-and-down">
                    <li onClick={handlerLogOut}><Link to={'/login'}>Cerrar Sesion</Link></li>
                    <li><Link to={'/crearPublicacion'}>Crear Publicaciones</Link></li>
                    <li><Link to={'/publicaciones'}>Ver Publicaciones</Link></li>
                    
                </ul>
            </div>        
        </nav>
        </nav>
    </>  
    )
}

export default Navigation;
