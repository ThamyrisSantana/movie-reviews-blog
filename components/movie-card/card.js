import React from "react";
import styles from "./card.module.css";

export default function Card(props) {
  return (
    <div className={styles.cardWrapper}>
      <div className={styles.carMovieImg}></div>
      <h2 className={styles.carMovieTitlle}>{props.movieTitle}</h2>
      <p className={styles.cardMovieStar}>{props.movieImg}</p>
    </div>
  );
}
