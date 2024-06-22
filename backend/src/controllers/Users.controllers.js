const {User} = require('../models/User')
const {userList} = require('../lists/listas')


const SingUsers = (req , res) => {

  
        
     
    return res.json({ msg: 'Pregunta1'} )
}

const cargarUsuarios =(req, res)=>{
   
}

const viewUsers = (req, res) => {
    res.json(userList)
}

const loginUsers = (req, res) => {

    const {carnet, password} = req.body;
    
    const Usuario = userList.find(user => user.getCarnet() === carnet && user.getPassword() === password)
      
    
    if (Usuario == undefined) {
       return res.json({ok: false, msg: 'Error de usuario o contraseña'})
    }else{
       return res.json({user: Usuario, ok: true, msg: 'Usuario ingresado correctamente'})
       
    }

}

module.exports = {
    SingUsers,
    viewUsers,
    loginUsers,
}