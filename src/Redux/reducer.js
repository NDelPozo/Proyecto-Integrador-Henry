const initialState = {
    myFavorites: [],
    allCharacters: []
}


const reducer = (state = initialState, action)=>{
    switch(action.type){
        case 'ADD_FAV':
            return{
                ...state,
                myFavorites: [...state.allCharacters, action.payload],
                allCharacters: [...state.allCharacters, action.payload]
            }
        case "REMOVE_FAV":
            return{
                ...state,
                myFavorites: state.myFavorites.filter((fav)=> fav.id !== parseInt(action.payload))
            }
        case "FILTER":
            if(action.payload === "All") return {
                ...state,
                myFavorites: state.allCharacters
            }
            const filteredCharacters = state.allCharacters.filter(
            char => char.gender === action.payload
             );
            return {
                 ...state,
                 myFavorites: filteredCharacters
            }
            case "ORDER":
                const favoriteOrdered = action.payload === 'A'
                ? [...state.allCharacters].sort((char1, char2)=> char1.id - char2.id)
                : [...state.allCharacters].sort((char1, char2)=> char2.id - char1.id);
                return{
                    ...state,
                    myFavorites: favoriteOrdered
                }

        default:
            return {...state}
    }

}

export default reducer