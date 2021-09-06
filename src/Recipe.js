import RecipeInfo from './RecipeInfo'

const Recipe = ( { recipe, recipes, title, openFullRecipe, url, openmodal, setOpenModal }) => {
   
    return (
        <>
        {recipes && <h3 onClick={(e) => openFullRecipe(url)}>{title}</h3> }
        
        { openmodal && <RecipeInfo recipe={recipe}/> }
        </>
    )
}

export default Recipe
