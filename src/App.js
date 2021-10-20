import { useEffect, useState } from 'react'
import { useQuery } from 'react-query'
import uuid from "react-uuid";
import Recipe from './Recipe'
import Form from './Form'
import Notfound from './Notfound'
import Modal from './Modal';
import Title from './Title';
import './App.css';
import Resultslist from './Resultslist';

const App = () => {
  const API_ID = '332736e6';
  // const API_KEY = process.env.REACT_APP_API_KEY;
  const [recipes, setRecipes] = useState([]);
  const [search, setSearch] = useState('');
  const [query, setQuery] = useState('');

  useEffect(() => {
    const getRecipes = async () => {
      const recipesfromAPI = await fetchRecipes();
      setRecipes(recipesfromAPI.hits)
      console.log(recipesfromAPI.hits)
    }
    getRecipes();
  }, [query])

  const fetchRecipes = async () => {
    try {
      const res = await fetch(`https://api.edamam.com/search?q=${query}&app_id=${API_ID}&app_key=${process.env.REACT_APP_API_KEY}`);
      const data = await res.json()
      return data
    } catch (err) {
      console.log(err)
    }
  }

  // const { data, status } = useQuery('recipes', fetchRecipes)
  const [openmodal, setOpenModal] = useState(true);
  const [currentitem, setCurrentItem] = useState({});

  const openModal = (title, ingredients, url, image) => {
    setOpenModal(true);
    setCurrentItem({ title, ingredients, url, image })
  }
  const closeModal = () => {
    setOpenModal(false);
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
      <div className="shadow">
        <div className="home-container">
          <Title />
          <Form search={search} updateSearch={updateSearch} getSearch={getSearch} />
          {/* {recipes && console.log(recipes)}*/}
          {/* {search && !recipes(<div> Loading data </div>)} */}

          {recipes && <div className="list"> {recipes.map(recipe => (<Recipe key={uuid()} recipe={recipe} />))}
          </div>
          }
          {/* {recipes && <div className="recipes">
            {recipes.map(recipe => (
              <Recipe key={uuid()} recipes={recipes} recipe={recipe} title={recipe.recipe.label} url={recipe.recipe.url} />
            ))}
          </div>
          } */}
          <div className="footer">Powered by the edamam API</div>
        </div>
      </div>
    </div >
  );
}

export default App;
