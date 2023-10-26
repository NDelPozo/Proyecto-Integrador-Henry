export default (data)=> {
    let errors = {};

    if(!data.email.includes('@')){
        errors.e1 = 'Ingrese un email valido!'
    }
    if(!data.email){
        errors.e2 = 'Porfavor ingrese un email'
    }
    if(data.email.length > 35 ){
        errors.e3 = 'El email tiene que ser mas corto!'
    }

    if(!/\d/.test(data.password)){
        errors.p1 = 'La contraseña tiene que contener un numero'
    } 
    if(data.password.length < 6 || data.password.length > 10){
        errors.p2 = 'La contraseña tiene que tener entre 6 y 10 caracteres'
    }

    return errors
    

}