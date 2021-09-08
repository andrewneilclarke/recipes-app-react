const Modal = ( { closeModal, currentitem } ) => {
    return (
        <>
                
                    <div className="modal">
                        <div className="modal-content">
                            <h1>{currentitem.title}</h1>
                            <ul>{currentitem.ingredients.map((ingredient)
                                (
                                    <li>{ingredient}</li>
                                )
                            )}</ul>
                            <p>{currentitem.url}</p>
                            <button onClick={closeModal}>CLOSE</button>
                        </div>
                    </div>
                

            {/* {recipe && <div>{recipe.label}</div> } */}
            {/* <img className="close" src="./close.svg" alt="close-button" /> */}
        </>
    )
}

export default Modal;
