class publicacion {
    static constador = 1;
    constructor(carnet, descripcion, imagen){
        this.idPost = publicacion.constador++;
        this.carnet = carnet;
        this.descripcion = descripcion;
        this.imagen = imagen;
    }
    getCarnet(){
        return this.carnet
    }
    setCodigo(){
        this.carnet = carnet;
    }
}
module.exports ={
    publicacion
}