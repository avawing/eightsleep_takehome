import React, { useEffect, useState } from "react";
import { useLocation, useParams } from "react-router-dom";
import axios from "axios";
import DogCard from "./DogCard";
import "./DogStyles.css";

export default function DogList() {
  let [dogs, setDogs] = useState([]);
  let [isClicked, setIsClicked] = useState(false);
  let params = useParams();
  let location = useLocation();

  console.log(location.pathname);

  useEffect(() => {
    if (location.pathname === "/favorites") {
      var favorites = JSON.parse(localStorage.getItem("favorites"));

      setDogs(favorites);
    } else if (Object.values(params).length === 0) {
      axios
        .get(`https://dog.ceo/api/breeds/image/random/20`)
        .then((res) => {
          setDogs(res.data.message);
        })
        .catch((err) => {
          console.log("error", err);
        });
    } else if (Object.values(params).length > 1) {
      axios
        .get(
          `https://dog.ceo/api/breed/${Object.values(params)[0]}/${
            Object.values(params)[1]
          }/images/random/20`
        )
        .then((res) => {
          setDogs(res.data.message);
        })
        .catch((err) => {
          console.log("error", err);
        });
    } else if (Object.values(params)[0].length === 1) {
      axios
        .get(`https://dog.ceo/api/breeds/list`)
        .then((res) => {
          let list = res.data.message;
          list = list.filter(
            (word) => word.charAt(0).toUpperCase() === Object.values(params)[0]
          );
          let num_dogs = Math.floor(20 / list.length);
          let total = 0;

          let dog_array = [];
          let last_index = list[list.length - 1];
          for (let i = 0; i < list.length; i++) {
            if (list[i] === last_index) {
              let final_num = 20 - total;

              axios
                .get(
                  `https://dog.ceo/api/breed/${list[i]}/images/random/${final_num}`
                )
                .then((res) => {
                  dog_array.push(...res.data.message);
                  setDogs(dog_array);
                })
                .catch((err) => {
                  console.log("error", err);
                });
            } else {
              axios
                .get(
                  `https://dog.ceo/api/breed/${list[i]}/images/random/${num_dogs}`
                )
                .then((res) => {
                  dog_array.push(...res.data.message);
                })
                .catch((err) => {
                  console.log("error", err);
                });
              total += num_dogs;
            }
          }
        })
        .catch((err) => {
          console.log("error", err);
        });
    } else {
      axios
        .get(
          `https://dog.ceo/api/breed/${
            Object.values(params)[0]
          }/images/random/20`
        )
        .then((res) => {
          setDogs(res.data.message);
        })
        .catch((err) => {
          console.log("error", err);
        });
    }
  }, [params, isClicked]);

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
      <button
        onClick={(e) => {
          if (isClicked === true) {
            setIsClicked(false);
          } else {
            setIsClicked(true);
          }
        }}
      >
        Fetch Doggos
      </button>
    </>
  );
}
