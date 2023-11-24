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

const URL = 'http://localhost:3001/rickandmorty'
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
  
  async  function login(userData) {
    
    try {
      const {data} = await axios(`${URL}/login?email=${userData.email}&password=${userData.
        password}`)
        const {access} = data
        setAccess(access)
        access && navigate('/home')
    } catch (error) {
      alert(error.response.data.message)
      
    }
    
    
    // const { email, password } = userData;
    // const URL = 'http://localhost:3001/rickandmorty/login/';
    // axios(URL + `?email=${email}&password=${password}`).then(({ data }) => {
    //    const { access } = data;
    //    setAccess(data);
    //    access && navigate('/home');
    // });
 }
  
  useEffect(()=>{
    !access && navigate('/');
  }, [access]);

 const onSearch = async (id) => {
    if(!id) alert ("Ingresa un ID porfavor")
    if(characters.find((char) => char.id ===
     Number(id))) return alert ('Ya existe el personaje!')

    try {
      const {data} = await axios(`${URL}/character/${id}`)

      setCharacters(oldChars => [...oldChars, data])
    } catch (error) {
       alert(error.response.data)
      
    }
 
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
