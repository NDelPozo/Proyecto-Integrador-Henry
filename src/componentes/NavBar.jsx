import SearchBar from "./SearchBar";
import {NavLink} from "react-router-dom";

const NavBar = ({onSearch})=> {
    return(
        <div>
         <SearchBar onSearch = {onSearch} />
         
         <NavLink to='/about'>
            <button>About</button>
         </NavLink>
         
         <NavLink to='/home'>
            <button>Home</button>
         </NavLink>

         <NavLink to='/favorites'>
            <button>Favorites</button>
         </NavLink>

        </div>
    )
};

export default NavBar;