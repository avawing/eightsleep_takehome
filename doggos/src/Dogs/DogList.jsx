import React, { useEffect, useState } from "react";
import axios from "axios";
import DogCard from "./DogCard";
import "./DogStyles.css";

export default function DogList() {
  let [dogs, setDogs] = useState([]);
  useEffect(() => {
    axios
      .get(`https://dog.ceo/api/breeds/image/random/20`)
      .then((res) => {
        setDogs(res.data.message);
      })
      .catch((err) => {
        console.log("error", err);
      });
  }, []);

  return (
    <>
      <div className="dog_list_container">
        {dogs.length > 0 ? (
          dogs.map((dog) => {
            return <DogCard key={dog} dog={dog} />;
          })
        ) : (
          <span />
        )}
      </div>
      <button>Fetch Doggos</button>
    </>
  );
}
