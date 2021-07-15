import React, { useState, useEffect } from "react";
import styles from "./card.module.scss";
import { HiStar } from "react-icons/hi";

// import Image from "next/image";
// import bannerImg from "../../public/";

export default function Card(props) {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    loadData();
  }, []);

  async function loadData() {
    const api = await fetch("http://localhost:3000/movies");
    const getResult = await api.json();
    setMovies(getResult);
  }
  return (
    <div className={styles.cardWrapper}>
      {movies.map((movie) => {
        return (
          <div key={movie.id} className={styles.cardContainer}>
            <div className={styles.card}></div>
            <div className={styles.movieInfo}>
              <p className={styles.cardMovieStar}>
                <HiStar className={styles.star} />
                {movie.stars}
              </p>
              <h2 className={styles.carMovieTitlle}>{movie.title}</h2>
              <button className={styles.reviewBtn}>Review</button>
            </div>
          </div>
        );
      })}
    </div>
  );
}
