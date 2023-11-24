const axios = require('axios');

const URL = 'https://rym2.up.railway.app/api/character/'

const API_KEY = 'pi-ndelpozo'


const getCharById = (req, res) => {
    const {id} = req.params

    axios(`${URL}${id}?key=${API_KEY}`)
    .then(({data})=>{
        const {id, status, name, species, origin, image,
        gender} = data
        
        const character = {id, status, name, species, origin,
        image, gender  }

        return character.name 
        ? res.status(200).json(character)
        : res.status(404).json({message:'character not found'})
    })
    .catch((err) => res.status(500).send(err.message))
    
}
    
module.exports = getCharById;