import React from "react";
import DogCard from "./DogCard";
import "./DogStyles.css";

export default function DogList() {
  let dogs = [1, 2, 3, 4, 5, 6, 7, 8, 9];

  return (
    <div className="dog_list_container">
      {dogs.map((dog) => {
        return <DogCard />;
      })}
    </div>
  );
}
