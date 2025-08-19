import React from "react";
import Card from "./Card";

const characters = [
  { name: "Luke Skywalker", height: "172", mass: "77", birth_year: "2003" },
  { name: "Darth Vader", height: "202", mass: "136", birth_year: "1993" },
  { name: "Leia Organa", height: "150", mass: "49", birth_year: "2004" },
];

function CardList() {
  return (
    <div className="row g-4">
      {characters.map((char, index) => (
        <div key={index} className="col-md-4">
          <Card {...char} />
        </div>
      ))}
    </div>
  );
}

export default CardList;