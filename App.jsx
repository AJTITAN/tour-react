import React from "react";
import data from './data'
import { useState } from "react";
import Tours from './Components/Tours';
import './App.css';
const App = () => {

  const [tours,setTours] = useState(data);
  function removeTour(id){
    const newTours = tours.filter(tour => tour.id !==id);
    setTours(newTours);
    // if(tours.size()==0){
    //   hi
    // }

 }
 
 if(tours.length===0){
  return (
    <div className="refresh">
      <h1>No Tours Left</h1>
      <button className="btn-white" onClick={()=>setTours(data)}>refresh</button>
    </div>
  );
 }
  return (
    <div className="App">
      <Tours tours={tours} removeTour = {removeTour}></Tours>
    </div>
  );
};

export default App;
