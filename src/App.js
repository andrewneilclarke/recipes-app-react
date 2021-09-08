import { useEffect, useState }  from 'react'
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
  const [recipes, setRecipes] = useState([]) ;
  const [search, setSearch] = useState('');
  const [query, setQuery] = useState('')
  // TEST DATA 
  const testData = [
    {name: 'egg salad', ingredients: ['eggs', 'mayo', 'mustard'] },
    {name: 'cheese ommlette', ingredients: ['eggs', 'cheese', 'salt and pepper'] },
    {name: 'scrambled eggs', ingredients: ['eggs', 'butter', 'milk'] },
  ]
const fetchRecipes = async () => {
  const res = await fetch(`https://api.edamam.com/search?q=chicken&app_id=${API_ID}&app_key=${process.env.REACT_APP_API_KEY}`);
  return res.json();
}

  const { data, status } = useQuery('recipes', fetchRecipes)
  const [openmodal, setOpenModal] = useState(false);
  const [currentitem, setCurrentItem] = useState({});
  
  const openModal = ( title, ingredients, url ) => {
    setOpenModal(true);
    setCurrentItem({title, ingredients, url})
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
              {/* <Form search={search} updateSearch={updateSearch} getSearch={getSearch} /> */}
              {status === 'loading' && <div> Loading data </div> }
              {status === 'error' && <div> Error fetching data </div> }
              
              {status === 'success' && <Resultslist data={data.hits} testData={testData} openModal={openModal} />}
              
              {status === 'success' && data.length === 0 && <Notfound /> }
              
              {recipes && <div className="recipes">
                    {recipes.map(recipe => (
                        <Recipe key={uuid()} recipes={recipes} recipe={recipe} title={recipe.recipe.label} url={recipe.recipe.url} />
                     ))} 
                        </div> 
              } 
              { openmodal && <Modal openmodal={openmodal} setOpenModal={setOpenModal} closeModal={closeModal} currentitem={currentitem} /> }
            </div> 
          </div>
        </div>
  );
}

export default App; 
