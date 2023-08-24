import React from "react";
import { directors } from "../data";

function Directors() {
  return (
  <div>
    <h1>Directors Page</h1>
      {directors.map((i, index) => (
        <div key={index}>
          <h3>Director:{i.name}</h3>
          <ul>Movies:{i.movies.map((movie) => (
            <li key={movie}>{movie}</li>
          ))}</ul> 
        </div>  
      ))}
      
  </div>
  )
}

export default Directors;
