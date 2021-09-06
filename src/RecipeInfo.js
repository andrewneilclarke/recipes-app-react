const RecipeInfo = ( { recipe, recipes, openModal, setOpenModal } ) => {
    // const {ingredients, image, link, title} = recipes;
//    console.log(ingredients, image, link, title)
    return (
        <>
                { openModal && (
                    <div className="modal">
                        <div className="modal-content">Recipe Info... MODAL {}
                            <button onClick={() => setOpenModal(false)}>CLOSE</button>
                        </div>
                    
                    </div>
                )}

            {recipe && <div>{recipe.label}</div> }
            {/* <img className="close" src="./close.svg" alt="close-button" /> */}
        </>
    )
}

export default RecipeInfo
