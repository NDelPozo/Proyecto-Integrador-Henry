const axios = require('axios');
const errorHandler = require('../Utils/errors')

const URL = 'https://rym2.up.railway.app/api/character/'

const API_KEY = 'pi-ndelpozo'


const getCharById = async (req, res) => {
    const {id} = req.params
    const ID = id

    try{
       const response = await axios(`${URL}${ID}?key=${API_KEY}`)

        const {id, name, species, status, gender, origin,
        image} = response.data

        const character = {id, name, species, status, gender, origin,
            image}

        if(character.id) return res.status(200).json(character)
        else throw Error('Character not found')
    }catch(error){
       errorHandler(res, error)
    }

  
    
}
    
module.exports = getCharById;