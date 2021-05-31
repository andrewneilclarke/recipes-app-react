import uuid from "react-uuid";
import style from './recipe.module.css'

const Recipe = ( { title, ingredients, image }) => {

    return (
        <div>
            <h1 className={style.recipe}>{title}</h1>
            {ingredients.map(ingredient =>                 
            (
                <li key={uuid()} className={style.image}>{ingredient}</li> 
            ))}
    
            <img src={image}  alt=""/>
        </div>
    )
}

export default Recipe
