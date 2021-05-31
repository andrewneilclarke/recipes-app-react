import { useEffect, useState }  from 'react'
import Recipe from './Recipe'
import './App.css';

const App = () => {

  const API_ID = '332736e6';
  const API_KEY = '5faa9af73c32e51b895c2c3c0676ced4';
  const [recipes, setRecipes] = useState([]) ;
  const [search, setSearch] = useState('');
  const [query, setQuery] = useState('chicken')

  useEffect(() => {
      getRecipes();
  }, [query])

  const getRecipes = async () => {
     const res = await fetch(`https://api.edamam.com/search?q=${query}&app_id=${API_ID}&app_key=${API_KEY}`);
     const data = await res.json();
     setRecipes(data.hits);
  }
  const updateSearch = (e) => {
    setSearch(e.target.value)
  }

const getSearch = (e) => {
  e.preventDefault()
  setQuery(search) 
  setSearch('')
}

  return (
    <div className="App">
        <form onSubmit={getSearch} className="search-form">
            <input className="search-bar" type="text" onChange={updateSearch}/>
              <button className="search-button" type="submit" value={search}>Search</button>
        </form>
        <div className="recipes">
     {recipes.map(recipe => (
       <Recipe key={recipe.recipe.label} title={recipe.recipe.label} ingredients={recipe.recipe.ingredientLines} image={recipe.recipe.image}/>
     ))}
        </div>
     
    </div>
  );
}

export default App; 
