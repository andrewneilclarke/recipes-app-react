import uuid from "react-uuid";

const Modal = ({ closeModal, currentitem }) => {
    const clickEdge = (e) => {
        console.log(e.target.id)
        if (e.target.id === 'modalid') {
            closeModal()
        }
    }
    return (
        <div className="modal" id="modalid" onClick={clickEdge}>
            <div className="modal-content">
                <h1>{currentitem.title}</h1>
                <ul>{currentitem.ingredients.map((ingredient) =>
                (
                    <li key={uuid()}>{ingredient}</li>
                )
                )}</ul>
                <a href={currentitem.url} target="_blank" rel="noreferrer">Open Full Recipe</a>
                {/* <Image {currentitem.image={image} /> */}
                <button onClick={closeModal}>CLOSE</button>
            </div>
            {/* {recipe && <div>{recipe.label}</div> } */}
            {/* <img className="close" src="./close.svg" alt="close-button" /> */}
        </div>
    )
}

export default Modal;
