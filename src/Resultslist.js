import uuid from "react-uuid";

const Resultslist = ( { data, openModal } ) => {
    
    return (
        <div className="food-results">
            {data.map((meal) => 
               (
                <h3 key={uuid()} onClick={() => openModal(meal.recipe.label, meal.recipe.ingredientLines, meal.recipe.url)}>{meal.recipe.label}</h3>
            ))}
        </div>
    )
}

export default Resultslist
