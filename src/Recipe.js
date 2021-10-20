import Modal from './Modal'
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom'
import { useParams } from 'react'
import RecipeDetails from './RecipeDetails';

const Recipe = ({ recipe, openFullRecipe, url, openmodal, setOpenModal }) => {
    const { id } = useParams();
    console.log(recipe.recipe)
    return (
        <div className="recipes">
            <Router>
                <Link to={`/${recipe.recipe.id}`}><h3>{recipe.recipe.label}</h3></Link>
                <Switch>
                    <Route path="/:id">
                        <RecipeDetails />
                    </Route>
                </Switch>
            </Router>
            {/* {recipes && <h3 onClick={(e) => openFullRecipe(url)}>{title}</h3>} */}
        </div>


    )
}

export default Recipe
