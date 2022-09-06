import { useState, useEffect } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";

function Details() {
  const [beer, setBeer] = useState([]);
  const { beerID } = useParams();

  useEffect(() => {
    async function fetchbeer() {
      try {
        const response = await axios.get(
          "https://ih-beers-api2.herokuapp.com/beers"
        );

        setBeer(response.data);
        console.log(response.data);
      } catch (error) {
        console.log(error);
      }
    }
    fetchbeer();
  }, []);

  return (
    <>
      {beer
        .filter((bee) => {
          return bee._id === beerID;
        })
        .map((beer) => {
          return (
            <div key={beer._id}>
              <img style={{width: "70px"}}  src={beer.image_url} alt={beer.name} />
              <h1>{beer.name}</h1>
              <h2>{beer.tagline}</h2>
              <h4>{beer.first_brewed}</h4>
              <p>{beer.description}</p>
              <p>{beer.attenuation_level}</p>
              <p>{beer.contributed_by}</p>
            </div>
          );
        })}
    </>
  );
}

export default Details;
