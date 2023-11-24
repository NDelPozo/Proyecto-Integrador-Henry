import { useSelector, useDispatch } from "react-redux"
import Card from "./Card"
import { filterCards, orderCards } from "../Redux/actions/actions"
import { useState } from "react"

const Favorites = () =>{



    const dispatch = useDispatch()

    const [aux, setAux] = useState(false)
    const myFavorites = useSelector((state)=>state.myFavorites)
    
    const handleOrder = (event) => {
        dispatch(orderCards(event.target.value))
        setAux(true)
    }
    const handleFilter = (event) => {
        dispatch(filterCards(event.target.value))
    }
        
    
    return (
        <div>
            {
                myFavorites.map(({id, name, species, gender, status,
                    origin, image})=>{
                    return (
                        <Card
                            key={id}
                            id={id}
                            name = {name}
                            status={status}
                            species={species}
                            gender={gender} 
                            image={image}
                            origin={origin}
                            // onClose={onClose}
                        />
                    )
                })
            }
            <select onChange={handleOrder}>
                <option value="A">Ascendente</option>
                <option value="D">Descendente</option>
            </select>
            <select onChange={handleFilter}>
                <option value="Male">Male</option>
                <option value="Female">Female</option>
                <option value="Genderless">Genderless</option>
                <option value="unknown">unknown</option>
            </select>


        </div>
    )

}


export default Favorites