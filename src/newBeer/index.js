import  { Link } from 'react-router-dom'

function NewBeer() {

  
function NavBar() {
    return(
        <div className='app-img'>
        <Link to="/">
        <img src="https://user-images.githubusercontent.com/23629340/40707029-cb2fce12-63ef-11e8-939c-f673ff3b965d.png"/>
        </Link>
        </div>
    )
}

    return (
        <div>
            {NavBar()}

            <h1>NEW BEER</h1>


        </div>
    )
}

export default NewBeer;