/* eslint-disable @next/next/no-img-element */
import React, { useState, useEffect } from "react";
import { useRouter } from "next/router";
import styles from "./reviews.module.scss";

import Head from "next/head";
import Header from "../../components/header/header";
import { HiStar } from "react-icons/hi";

export default function Review() {
  const [isLoading, setIsLoading] = useState(true);
  const [movie, setMovie] = useState(undefined);

  const router = useRouter();
  const id = router.query.id;

  useEffect(() => {
    async function loadData() {
      setIsLoading(true);
      const api = await fetch("http://localhost:3000/movies/" + id);
      const result = await api.json();
      setMovie(result);
      setIsLoading(false);
    }
    if (id) {
      loadData();
    }
  }, [id]);

  return (
    <div className={styles.reviewPage}>
      <Head>
        <title>Review</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Header />
      {isLoading ? (
        <main className={styles.mainOff}>
          <div className={styles.loading}></div>
        </main>
      ) : (
        <main className={styles.main}>
          <section className={styles.movieSection}>
            <img src={movie.movieImg} alt="Movie Image" />
            <div className={styles.movieInf}>
              <h1 className={styles.movieTitle}>{movie.title}</h1>
              <p className={styles.movieDescription}>
                <span>Description: </span>
                {movie.description}
              </p>
              <p className={styles.movieDirector}>
                <span>Director: </span>
                {movie.director}
              </p>
            </div>
          </section>
          <section className={styles.reviewSection}>
            <hr />
            <h1 className={styles.review}>
              My review
              <span>
                <HiStar className={styles.star} />
                {movie.stars}
                <br />
              </span>
            </h1>
            <p>{movie.review}</p>
          </section>
        </main>
      )}
    </div>
  );
}
