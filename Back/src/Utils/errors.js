module.exports = (res, error) => {
        return res.status(404).send('No existe el personaje')
        
   
   
   
    // const {response} = error

    // if(response){
    //     const {status, data} = response

    //     const statusCode = status || 404
    //     const errorMessage = data.error || 'No existe el personaje'

    //     res.status(statusCode).json({error:errorMessage})
    // }else {
    //     res.status(500).send('Error interno del servidor')
    // }
}