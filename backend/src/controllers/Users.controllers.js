const {User} = require('../models/User')
const {userList} = require('../lists/listas')


const SingUsers = (req , res) => {

    //let json = {msg: 'Hola mundo', msg2: 'JavaScript'}
    //carnet, nombre, apellido, facultad, carrera, correo, password
    //let Usuario = new User(202300824, 'estudiante1', 'sdafas', 'M', 'ingenieria', 'Sistemas', 'Correo@gmal.com', '123')
    //console.log(Usuario)
    let admin = new User(12024, 'federico', 'set', 'M', 'ingenieria', 'Ingeniería en Ciencias y Sistemas', 'ipc11s2024@email.com', '@dminIPC1')
    userList.push(admin);
    const {carnet, nombre, apellido, genero, facultad, carrera, correo, password} = req.body;
    
    let Usuario = new User(carnet, nombre, apellido, genero, facultad, carrera, correo, password)

    const existUser = userList.find(user => user.getCarnet() === carnet)

     if (existUser == undefined){ 
        userList.push(Usuario);
        res.json({msg: 'Usuario a sido guardado correctente'})
     }else{
        res.json({msg: 'El usuario ya existe'})
        
     }
     
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