/* eslint-disable @next/next/no-img-element */
import React, { useState, useEffect } from "react";
import { useRouter } from "next/router";

import styles from "./reviews.module.scss";

import Head from "next/head";
import Header from "../../components/header/header";
import Loanding from "../../components/loading/Loanding";

import { HiStar } from "react-icons/hi";
import { BsFillHeartFill, BsHeart } from "react-icons/bs";

import toast, { Toaster } from "react-hot-toast";

export default function Review() {
  const [isLoading, setIsLoading] = useState(true);
  const [movie, setMovie] = useState(undefined);
  const [favoriteBtn, setFavoriteBtn] = useState(false);

  const [favorites, setFavorites] = useState([]);

  console.log(favorites);
  // console.log(favorites.map((item) => movie === item));

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

  function favoriteToggle() {
    const newFavorite = [...favorites, movie];
    toast.success("Added to favorites", {
      icon: "❤️",
      style: {
        padding: "7px",
        fontSize: "1.1rem",
      },
    });

    setFavorites(newFavorite);
    setFavoriteBtn(true);
  }

  function removeFromFavorite() {
    const newFavs = favorites.filter((item) => item.id !== movie.id);

    setFavorites(newFavs);

    toast.error("Removed from favorites", {
      style: {
        padding: "7px",
        fontSize: "1.1rem",
      },
    });
  }

  useEffect(() => {
    const data = localStorage.getItem("favorites");

    if (data) {
      setFavorites(JSON.parse(data));
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("favorites", JSON.stringify(favorites));
  }, [favorites]);

  return (
    <div className={styles.reviewPage}>
      {isLoading ? (
        <main className={styles.mainOff}>
          <Loanding />
        </main>
      ) : (
        <main className={styles.main}>
          <Header />
          <Head>
            <title>Review: {movie.title}</title>
            <meta name="description" content="Generated by create next app" />
            <link rel="icon" href="/movie-icon.svg" />
          </Head>
          <section className={styles.movieSection}>
            <img src={movie.movieImg} alt="Movie Image" />
            <div className={styles.movieInf}>
              <h1 className={styles.movieTitle}>{movie.title}</h1>
              <div className={styles.movieDescription}>
                <span>Description: </span>
                <p>{movie.description}</p>
              </div>
              <p className={styles.movieDirector}>
                <span>Director: </span>
                {movie.director}
              </p>
            </div>
          </section>
          <section className={styles.reviewSection}>
            <hr />
            <div className={styles.reviewSectionHeader}>
              <h1 className={styles.review}>
                My review
                <span>
                  <HiStar className={styles.star} />
                  {movie.stars}
                  <br />
                </span>
              </h1>

              <button>
                {favorites.some((item) => movie.id === item.id) ? (
                  <BsFillHeartFill onClick={removeFromFavorite} />
                ) : (
                  <BsHeart onClick={favoriteToggle} />
                )}
                <Toaster />
              </button>
            </div>
            {favoriteBtn ? <span>favorite</span> : <span>not favorite</span>}
            <p>{movie.review}</p>
          </section>
        </main>
      )}
    </div>
  );
}
