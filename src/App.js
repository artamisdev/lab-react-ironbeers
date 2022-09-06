import './App.css';
import { Routes, Route } from "react-router-dom";
import RandomBeer from './RandomBeer';
import NewBeer from './newBeer';
import AllBeers from './AllBeers';
import HomePage from './HomePage';
import Details from './Details';


function App() {

  return (

    <div className="App">


      <Routes>
        
        <Route path="/" element= {<HomePage/>}/>
         
        <Route path="/beers" element={<AllBeers /> } />

        <Route path="/beers/:beerID" element={<Details/>}/>

        <Route path="/random-beer" element={<RandomBeer/>} />

        <Route path="/new-beer" element={<NewBeer/>}/>

      </Routes>


    </div>
  );
}

export default App;
