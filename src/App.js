import { useEffect, useState }  from 'react'
import uuid from "react-uuid";
import Recipe from './Recipe'
import RecipeInfo from './RecipeInfo';
import './App.css';
import Title from './Title';

const App = () => {
  const API_ID = '332736e6';
  // const API_KEY = process.env.REACT_APP_API_KEY;
  const [recipes, setRecipes] = useState([]) ;
  const [search, setSearch] = useState('');
  const [query, setQuery] = useState('')

  const [openmodal, setOpenModal] = useState(true);
    
  const openFullRecipe = ( url ) => {
      setOpenModal(true);
  }
  
  useEffect(() => {
      const getRecipes = async () => {
      const res = await fetch(`https://api.edamam.com/search?q=${query}&app_id=${API_ID}&app_key=${process.env.REACT_APP_API_KEY}`);
      const data = await res.json();
      setRecipes(data.hits);
   }
      getRecipes();
      console.log(recipes)
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
       <div className="App">
          <div className="shadow">
            <div className="home-container">
              <Title />
              {openmodal && <RecipeInfo openmodal={openmodal} setOpenModal={setOpenModal} /> }
              <form onSubmit={getSearch} className="search-form">
                    <input className="search-bar" type="text" placeholder="Enter ingredient (e.g. Red Pepper)" onChange={updateSearch}/>
                      <button className="search-button" type="submit" value={search}>Search</button>
                </form>
                          
              {search && recipes.length === 0 && 
              <h2>No recipes found</h2>}

             {recipes && <div className="recipes">
                    {recipes.map(recipe => (
                        <Recipe key={uuid()} recipes={recipes} recipe={recipe} title={recipe.recipe.label} url={recipe.recipe.url} openFullRecipe={openFullRecipe} openmodal={openmodal} setOpenModal={setOpenModal} />
                    ))} 
                        </div> 
               } 
            </div> 
          </div>
        </div>
  );
}

export default App; 
