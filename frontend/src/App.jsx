
import './App.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import 'materialize-css/dist/css/materialize.min.css';
import 'materialize-css/dist/js/materialize.min.js';
import Login from './pages/Login.jsx';
import Administrador from './pages/administrador.jsx';
import CreatePost from './pages/CreatePost.jsx';
import Registro from './pages/Registro.jsx';
import Publicacion from './pages/publicacion.jsx';

function App() {
  
  return (
  
      <div>
        <BrowserRouter>
        <Routes>
          <Route path={'/publicaciones'} element={<Publicacion/>}/>
          <Route path={'/login'} element ={<Login/>}/> 
          <Route path={'/crearPublicacion'} element={<CreatePost/>}/>
          <Route path={'/registro'} element={<Registro/>}/> 
          <Route path={'/Admin'} element={<Administrador/>}/> 
        </Routes>
        </BrowserRouter>
      </div>
    
  )
}

export default App
