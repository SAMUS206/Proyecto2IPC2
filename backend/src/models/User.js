class User {
        constructor(carnet, nombre, apellido, genero, facultad, carrera, correo, password) {
            this.carnet = carnet;
            this.nombre = nombre;
            this.apellido = apellido;
            this.genero = genero;
            this.facultad = facultad;
            this.carrera = carrera;
            this.correo = correo;
            this.password = password;
        }
        
    
        // Getters
        getCarnet() {
            return this.carnet;
        }
    
        getNombre() {
            return this.nombre;
        }
    
        getApellido() {
            return this.apellido;
        }
        
        getGenero(){
            return this.genero
        }
        
        getFacultad() {
            return this.facultad;
        }
    
        getCarrera() {
            return this.carrera;
        }
    
        getCorreo() {
            return this.correo;
        }
    
        getPassword() {
            return this.password;
        }
    
        // Setters
        setCarnet(carnet) {
            this.carnet = carnet;
        }
    
        setNombre(nombre) {
            this.nombre = nombre;
        }
    
        setApellido(apellido) {
            this.apellido = apellido;
        }
        
        setGenero(genero){
            this.genero = genero;
        }

        setFacultad(facultad) {
            this.facultad = facultad;
        }
    
        setCarrera(carrera) {
            this.carrera = carrera;
        }
    
        setCorreo(correo) {
            this.correo = correo;
        }
    
        setPassword(password) {
            this.password = password;
        }
    }
    module.exports ={
        User
    }
    

