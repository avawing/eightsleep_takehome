import React, { useState } from "react";
import { FaRegHeart, FaHeart } from "react-icons/fa";

export default function DogCard(props) {
  const [isClicked, setClicked] = useState(false);
  return (
    <div className="dog_card_outer">
      <img src={props.dog} className="dog_card_inner"></img>
      <div className="dog_card_footer">
        Dog Breed / Sub Breed
        <button
          className="dog_card_favorite"
          onClick={(e) => {
            if (isClicked === true) {
              setClicked(false);
            } else {
              setClicked(true);
            }
          }}
        >
          {isClicked ? <FaHeart /> : <FaRegHeart />}
        </button>
      </div>
    </div>
  );
}
