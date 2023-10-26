import './App.css';
import Cards from './componentes/Cards';
import NavBar from './componentes/NavBar';
import SearchBar from './componentes/SearchBar';
import { useState, useEffect } from 'react';
import axios from 'axios'
import {Routes, Route, useLocation, useNavigate} from 'react-router-dom'
import About from './componentes/About';
import Detail from './componentes/Detail';
import Form from './componentes/Form';
import Error from './componentes/Error';
import Favorites from './componentes/Favorites';


const EMAIL = 'nickdelpo@gmail.com'
const PASSWORD = 'contra10'

function App() {

  const { pathname } = useLocation()
  const navigate = useNavigate()
  const example = {
    id: 1,
    name: 'Rick Sanchez',
    status: 'Alive',
    species: 'Human',
    gender: 'Male',
    origin: {
       name: 'Earth (C-137)',
       url: 'https://rickandmortyapi.com/api/location/1',
    },
    image: 'https://rickandmortyapi.com/api/character/avatar/1.jpeg',
 };
  
  const [characters, setCharacters] = useState([])
  const [access, setAccess] = useState(false)
  
  function login(userData) {
    if (userData.password === PASSWORD && userData.email === EMAIL) {
       setAccess(true);
       navigate('/home');
    }
 }
  
  useEffect(()=>{
    !access && navigate('/');
  }, [access]);

 const onSearch = (id) => {
    axios(`https://rym2.up.railway.app/api/character/${id}?key=pi-ndelpozo`).then(
       ({ data }) => {
          if (data.name) {
             setCharacters((oldChars) => [...oldChars, data]);
          } else {
             window.alert('¡No hay personajes con este ID!');
          }
       }
    );
 }

  const onClose = (id) => {
    setCharacters(
      characters.filter((char)=>{
        return char.id !== Number(id)
      })
    )
  };
  return (
    <div>
      
      {pathname !== '/' && <NavBar onSearch={onSearch} />}
      
      <Routes>
        <Route path='/' element ={<Form login={login}/>}/>
        <Route path='*' element={<Error/>}/>
        <Route path='/home' element={<Cards characters={characters} onClose={onClose}/>}/>
        <Route path='/about' element={<About/>}/>
        <Route path='/detail/:id' element={<Detail/>}/>
        <Route path='/favorites' element={<Favorites/>}/>
      </Routes>
    </div>
  )
};

export default App
