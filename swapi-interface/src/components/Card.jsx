import React from "react";

function Card({ name, height, mass, birth_year }) {
  return (
    <div className="card bg-secondary text-light h-100">
      <div className="card-body">
        <h5 className="card-title">{name}</h5>
        <p className="card-text">Height: {height} cm</p>
        <p className="card-text">Mass: {mass} kg</p>
        <p className="card-text">Birth Year: {birth_year}</p>
      </div>
    </div>
  );
}

export default Card;