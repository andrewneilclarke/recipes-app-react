const Form = ({ getSearch, updateSearch, search }) => {
    return (
        <form onSubmit={getSearch} className="search-form">
            <input className="search-bar" type="text" placeholder="Enter ingredient (e.g. Red Pepper)" onChange={updateSearch} />
            <button className="search-button" type="submit" value={search}>Search</button>
        </form>
    )
}

export default Form
