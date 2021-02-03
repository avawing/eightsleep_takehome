import React, { useState } from "react";
import { FaRegHeart, FaHeart } from "react-icons/fa";

export default function DogCard(props) {
  const [isClicked, setClicked] = useState(false);

  function handleFavorites(link) {
    // Get the existing data
    var favorites = JSON.parse(localStorage.getItem("favorites")) || [];

    if (favorites.length > 0) {
      for (var i = 0; i < favorites.length; i++) {
        if (favorites[i] === link) {
          favorites.splice(i, 1);
          localStorage.setItem("favorites", JSON.stringify(favorites));
          return;
        }
      }
    }
    favorites.push(link);
    localStorage.setItem("favorites", JSON.stringify(favorites));
    return;
  }

  return (
    <div className="dog_card_outer">
      <img src={props.dog} className="dog_card_inner"></img>
      <div className="dog_card_footer">
        Dog Breed / Sub Breed
        <button
          className="dog_card_favorite"
          onClick={() => {
            handleFavorites(props.dog);
          }}
        >
          {isClicked ? <FaHeart /> : <FaRegHeart />}
        </button>
      </div>
    </div>
  );
}
