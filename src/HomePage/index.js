import { Link } from "react-router-dom";
import randomBeerImg from "../assets/random-beer.png";
import beersImg from "../assets/beers.png";
import newBeerImg from "../assets/new-beer.png"

function HomePage() {
  return (
    <div>
      <h1>HomePage</h1>
      <img src={beersImg} />
      <Link to="/beers">All Beers</Link>

      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis, ab.
        Facere, laudantium, vel tempore saepe autem doloribus eum aliquid
        aspernatur veritatis error tempora fugit a reiciendis? Eaque dolorem
        rerum neque.
      </p>
      <img src={randomBeerImg} />
      <Link to="/random-beer">Random Beer</Link>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis, ab.
        Facere, laudantium, vel tempore saepe autem doloribus eum aliquid
        aspernatur veritatis error tempora fugit a reiciendis? Eaque dolorem
        rerum neque.
      </p>
      <img src={newBeerImg} />
      <Link to="/new-beer">New Beer</Link>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis, ab.
        Facere, laudantium, vel tempore saepe autem doloribus eum aliquid
        aspernatur veritatis error tempora fugit a reiciendis? Eaque dolorem
        rerum neque.
      </p>
    </div>
  );
}

export default HomePage;
