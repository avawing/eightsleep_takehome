import React, { useEffect, useState } from "react";
import axios from "axios";
import "./SearchBar.css";
import DogList from "../Dogs/DogList";

export default function SearchBar() {
  const [dropList, setDropList] = useState([]);
  const [terms, setTerms] = useState("");

  const alphas = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";

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

  return (
    <>
      <div className="dogs_searchBar">
        <div className="dogs_dropdown">
          {" "}
          <label for="dogs"> Browse By Breed: </label>
          <select id="dogs" onChange={(e) => setTerms(e.target.value)}>
            <option value="null">Dog List: </option>
            {dropList.map((dog) => {
              let breed = dog[0];
              let subs = dog[1];

              if (subs.length > 0) {
                return subs.map((sub) => {
                  const full = breed + " " + sub;
                  return <option value={full}>{full}</option>;
                });
              }
              return <option value={breed}>{breed}</option>;
            })}
          </select>
        </div>
        <div className="dogs_alphabet" />
        <label for="letter">Browse By Alphabet: </label>
        <select id="letter" onChange={(e) => setTerms(e.target.value)}>
          {alphas.split("").map((letter) => (
            <option value={letter}>{letter}</option>
          ))}
        </select>
      </div>
      <DogList terms={terms} />
    </>
  );
}
