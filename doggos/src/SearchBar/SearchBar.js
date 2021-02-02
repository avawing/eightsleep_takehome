import React, { useEffect, useState } from "react";
import axios from "axios";
import "./SearchBar.css";
import DogList from "../Dogs/DogList";

export default function SearchBar() {
  const [dropList, setDropList] = useState([]);
  //   const [dog, setDog] = useState("");

  useEffect(() => {
    axios
      .get(`https://dog.ceo/api/breeds/list/all`)
      .then((res) => {
        setDropList(Object.entries(res.data.message));
      })
      .catch((err) => {
        console.log("error", err);
      });
  }, []);

  function openSelection() {
    return;
  }

  return (
    <div className="dogs_searchBar">
      <div className="dogs_dropdown">
        {" "}
        <label for="dogs"> Select Dog: </label>
        <select id="dogs">
          <option value="null">Dog List: </option>
          {dropList.map((dog) => {
            let breed = dog[0];
            let subs = dog[1];

            if (subs.length > 0) {
              return subs.map((sub) => {
                const full = breed + " " + sub;
                return <option value={full}>{full}</option>;
              });
            } else {
              return <option value={breed}>{breed}</option>;
            }
          })}
        </select>
      </div>
      <div className="dogs_alphabet" />
    </div>
  );
}
