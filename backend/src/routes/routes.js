const express = require ('express');

const userControllers = require('../controllers/Users.controllers');
const publicacionesControllers  = require('../controllers/Post.controllers');

const router = express.Router();
//Ususarios
router.post('/singinUsers', userControllers.SingUsers ); 
router.get('/viewUsers', userControllers.viewUsers);
router.post('/login', userControllers.loginUsers);
//Pubicaciones
router.post('/crearpublicacion', publicacionesControllers.createPost);
router.get('/verPost', publicacionesControllers.verPublicaciones);


module.exports = router;