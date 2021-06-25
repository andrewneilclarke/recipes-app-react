import uuid from "react-uuid";
import style from './recipe.module.css'

const Recipe = ( { title, ingredients, image, link }) => {

    return (
        <div className="recipe">
            <h3 className={style.recipe}>{title}</h3>
            {ingredients.map(ingredient =>                 
            (
                <li key={uuid()} className={style.image}>{ingredient}</li> 
            ))}
    
            <img src={image}  alt=""/>
            <a href={link}>Open Recipe Site</a>
        </div>
    )
}

export default Recipe
