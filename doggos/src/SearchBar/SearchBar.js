import React, { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import axios from "axios";
import "./SearchBar.css";
import DogList from "../Dogs/DogList";

function SearchBar() {
  const [dropList, setDropList] = useState([]);
  let history = useHistory();
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
          <select
            id="dogs"
            onChange={(e) => {
              let dog = e.target.value.split(" ")[0];
              let sub = e.target.value.split(" ")[1];

              if (sub) {
                history.push("/");
                history.push(`${dog}/${sub}`);
              } else {
                history.push("/");
                history.push(e.target.value);
              }
            }}
          >
            <option value="/">Dog List: </option>
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
        <select
          id="letter"
          onChange={(e) => {
            history.push("/");
            history.push(e.target.value);
          }}
        >
          <option value="/">Letters</option>
          {alphas.split("").map((letter) => (
            <option value={letter}>{letter}</option>
          ))}
        </select>
      </div>
      <DogList />
    </>
  );
}

export default SearchBar;
