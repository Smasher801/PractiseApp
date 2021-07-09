import React , {useState , useEffect } from 'react';
import Header from './Component/Header';
import Recipe from './Component/Recipe';
import "./App.css";
import Axios from 'axios';



const App = () => {

  

  const[search , setSearch] = useState("chicken");
  const[recipe , setRecipe] = useState([]);

    const APP_ID = "7b4ebf22";
    const APP_KEY = "0c13d5f0ec6fd715f5e27f2125523422	";

   useEffect(  () => {
         getRecipe();
  }, []

  );

  const getRecipe = async () => {
    const res = await Axios.get(`https://api.edamam.com/search?q=${search}&app_id=${APP_ID}&app_key=${APP_KEY}`); 
    
      setRecipe(res.data.hits);

  }

  const onInputChange = (e) => {
    setSearch(e.target.value);
  }

  const onSearchClick = () => {
     getRecipe();
  }

  return (
       <div className = "App" >
        
          <Header  search = {search} 
              onInputChange = {onInputChange}  onSearchClick = {onSearchClick}  />
           <div className = "container" >   
          <Recipe   recipe = {recipe} />

          </div>
         
       </div>
  );
}
export default App;
