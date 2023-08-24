import React from "react";
import { movies } from "../data";

function Movies() {
  return (
  <div>
    <h1>Movies Page</h1>
      {movies.map((i, index) => (
        <div key={index}>
          <h2>Title: {i.title}</h2>
          <p>Time: {i.time}</p>
          <ul>Genre: 
            {i.genres.map((i, index) => (
              <li key={index}>
                {i}
              </li>
            ))}
          </ul>
        </div>
      ))}
  </div>
  )
}

export default Movies;
