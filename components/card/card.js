/* eslint-disable @next/next/no-img-element */
import styles from "./card.module.scss";
import { HiStar } from "react-icons/hi";
import Link from "next/link";

export default function Card({ title, stars, id, image }) {
  return (
    <div className={styles.cardWrapper}>
      <div className={styles.cardContainer}>
        <div className={styles.card}>
          <img src={image} alt="Moviemg" />
        </div>
        <div className={styles.movieInfo}>
          <p className={styles.cardMovieStar}>
            <HiStar className={styles.star} />
            {stars}
          </p>
          <h2 className={styles.carMovieTitlle}>{title}</h2>
        </div>
        <Link href={`/review/${id}`}>
          <button className={styles.reviewBtn}>Review</button>
        </Link>
      </div>
    </div>
  );
}
