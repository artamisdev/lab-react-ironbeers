import axios from "axios";
import { useEffect, useState } from "react";
import { Link } from 'react-router-dom';


function AllBeers() {


function NavBar() {
    return(
        <div className='app-img'>
        <Link to="/">
        <img src="https://user-images.githubusercontent.com/23629340/40707029-cb2fce12-63ef-11e8-939c-f673ff3b965d.png"/>
        </Link>
        </div>
    )
}

const [beers, setBeers] = useState([])


useEffect(() => {
    
    async function fetchbeer() {
        try {
            const response = await axios.get("https://ih-beers-api2.herokuapp.com/beers");
            
            setBeers(response.data)
            console.log(response.data);
    
        } catch (error) {
            console.log(error);
        }     

    }
      fetchbeer();

}, []);
console.log(beers)


    return (
        
        <div key={beers.name}>
            {NavBar()}
            <div>

           {beers.map((beer) => {
            return(
            <Link to={`/beers/${beer._id}`}>
            <img style={{width: "50px"}} src={beer.image_url} alt={beer.name} />
            <p> {beer.name}</p>
            </Link>

            
           )})}
         
             </div>

        </div>
    )
}

export default AllBeers;

