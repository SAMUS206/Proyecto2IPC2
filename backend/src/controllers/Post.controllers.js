const {publicacion} = require('../models/publicacion')
const {postList} = require('../lists/listas')

const createPost = (req, res) => {
    const {carnet, descripcion, imagen} = req.body;
    let	Publicacion = new publicacion(carnet, descripcion, imagen)
    postList.push(Publicacion);
    res.json({msg: 'se creo la publicacion'})

}
const verPublicaciones = (req, res) =>{
 res.json(postList)

}

module.exports = {
    createPost,
    verPublicaciones
}