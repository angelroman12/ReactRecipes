import React, {useEffect, useState} from 'react';
import Recipe from './Recipe';
import "./App.css";

const App = () =>{
    const APP_ID = "6340253c";
    const APP_KEY = "f324b47255e17caae2904c880ce1167d";
    
    const [recipes, setRecipes] = useState([]);
    const [search, setSearch] = useState("");
    const [query, setQuery] = useState('chicken');

    useEffect ( () =>{ 
        getRecipes();
    },[query]);

    const getRecipes = async ()=>{
        const response = await fetch(`https://api.edamam.com/search?q=${query}&app_id=${APP_ID}&app_key=${APP_KEY}`)
        const data = await response.json();
        console.log(data)
        setRecipes(data.hits);       
    }

    const updateSearch = e => {
        setSearch(e.target.value);
        
    }

    const getSearch = e => {
        e.preventDefault()
        setQuery(search)
    }

    return (
        <div className="App">
            <form onSubmit={getSearch} className="search-form"> 
               <input className="search-bar" onEnterKey={updateSearch} type="text" value={search} onChange={updateSearch}/>
               <button className="search-button" type="submit">Search</button>
            </form>
            <div className="recipes">
            {recipes.map(recipe => (
               <Recipe 
               key={recipe.recipe.label}
               title={recipe.recipe.label}
               mealType={recipe.recipe.mealType} 
               image={recipe.recipe.image}
               dishType={recipe.recipe.dishType}
               directions={recipe.recipe.url}
               ingredients={recipe.recipe.ingredients}/>
            ))}
            </div>
        </div>
    )
}
export default App;