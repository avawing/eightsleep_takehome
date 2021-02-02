import React from "react";
import { FaHeart, FaRegHeart } from "react-icons/fa";

export default function DogCard(props) {
  return (
    <div className="dog_card_outer">
      <img src={props.dog} className="dog_card_inner"></img>
      <div className="dog_card_footer">
        Dog Breed / Sub Breed
        <button className="dog_card_favorite">
          <FaRegHeart />
        </button>
      </div>
    </div>
  );
}
