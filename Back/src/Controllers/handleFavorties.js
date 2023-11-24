let myFavorites = []

const postFav = (req, res) =>{
    myFavorites.push(req.body)
    console.log(myFavorites);
    return res.status(201).json(myFavorites)
}

const deleteFav = (req, res) => {
    const {id}= req.params

    myFavorites = myFavorites.filter(char => char.id != Number(id))
    return res.status(200).json(myFavorites)
}

module.exports = {
    postFav,
    deleteFav
}