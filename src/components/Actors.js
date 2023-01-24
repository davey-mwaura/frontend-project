import React from "react";
import { actors } from "../data";

function Actors() {
  return (
    <div>
      <h1>Actors Page</h1>
        {actors.map((actor, index) => (
          <div key={index}>
            <p>{actor.name}</p>
            <ul>
              {actor.movies.map((movie, index) => (
                <li key={index}>{movie}</li>
              ))}
            </ul>
          </div>
        ))}
    </div>
  );
}

export default Actors;

