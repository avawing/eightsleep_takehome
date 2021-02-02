import React from "react";
import { FaHeart, FaRegHeart } from "react-icons/fa";

export default function DogCard() {
  return (
    <div className="dog_card_outer">
      <div className="dog_card_inner"></div>
      <div className="dog_card_dog_name">Dog Breed / Sub Breed</div>
      <button className="dog_card_favorite">
        <FaRegHeart />
      </button>
    </div>
  );
}
