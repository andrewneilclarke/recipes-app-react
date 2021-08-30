import { Link } from 'react-router-dom'

const Title = () => {
    
    return (
            <div className="title">
                <h1 className="main-title"><Link to="/">Inspirational Recipes</Link></h1>
                <h3 className="tagline">Find inspirational recipes based on ingredient or whatever is lying around in the cupboard</h3> 
           </div>
    )
}

export default Title
