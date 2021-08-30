import { useEffect, useState }  from 'react'
import uuid from "react-uuid";
import Recipe from './Recipe'
import './App.css';
import Title from './Title';
import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom'


const App = () => {

  const API_ID = '332736e6';
  const API_KEY = process.env.REACT_APP_API_KEY;
  const [recipes, setRecipes] = useState([]) ;
  const [search, setSearch] = useState('');
  const [query, setQuery] = useState('')

  useEffect(() => {
      const getRecipes = async () => {
      const res = await fetch(`https://api.edamam.com/search?q=${query}&app_id=${API_ID}&app_key=${API_KEY}`);
      const data = await res.json();
      setRecipes(data.hits);
   }
      getRecipes();
  }, [query])

  
  const updateSearch = (e) => {
    setSearch(e.target.value)
  }

  const getSearch = (e) => {
    e.preventDefault()
    setQuery(search) 
    setSearch('')
  }


  return (
    <Router>
       <div className="App">
          <div className="shadow">
            <div className="home-container">
            <Title />
            <Route path="/">
            <form onSubmit={getSearch} className="search-form">
                  <input className="search-bar" type="text" placeholder="Enter ingredient (e.g. Red Pepper)" onChange={updateSearch}/>
                    <button className="search-button" type="submit" value={search}>Search</button>
              </form>
            </Route>              
            </div>
        {/* {query && recipes.length === 0 && 
        <h2>No recipes found</h2>} */}
                <div className="recipes">
                    {recipes.map(recipe => (
                        <Recipe key={uuid()} title={recipe.recipe.label} ingredients={recipe.recipe.ingredientLines} image={recipe.recipe.image} link={recipe.recipe.url}/>
                    ))} 
              </div>
          </div>
    </div>
    </Router>
  );
}

export default App; 
