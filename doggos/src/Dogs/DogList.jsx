import React, { useEffect, useState } from "react";
import axios from "axios";
import DogCard from "./DogCard";
import "./DogStyles.css";

export default function DogList(props) {
  let [dogs, setDogs] = useState([]);
  let [isClicked, setIsClicked] = useState(false);

  useEffect(() => {
    if (props.terms.length === 0) {
      axios
        .get(`https://dog.ceo/api/breeds/image/random/20`)
        .then((res) => {
          setDogs(res.data.message);
        })
        .catch((err) => {
          console.log("error", err);
        });
    } else if (props.terms.split(" ").length > 1) {
      const dogArr = props.terms.split(" ");
      axios
        .get(
          `https://dog.ceo/api/breed/${dogArr[0]}/${dogArr[1]}/images/random/20`
        )
        .then((res) => {
          setDogs(res.data.message);
        })
        .catch((err) => {
          console.log("error", err);
        });
    } else if (props.terms.split("").length === 1) {
      axios
        .get(`https://dog.ceo/api/breeds/list`)
        .then((res) => {
          let list = res.data.message;
          list = list.filter(
            (word) => word.charAt(0).toUpperCase() === props.terms
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
        .get(`https://dog.ceo/api/breed/${props.terms}/images/random/20`)
        .then((res) => {
          setDogs(res.data.message);
        })
        .catch((err) => {
          console.log("error", err);
        });
    }
  }, [props.terms, isClicked]);

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
