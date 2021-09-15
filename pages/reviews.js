import React, { useState, useEffect } from "react";
import Head from "next/head";

import Card from "../components/card/card";
import Header from "../components/header/header";
import Loanding from "../components/loading/Loanding";
import styles from "../styles/ReviewsPage.module.scss";

import { BiSearch } from "react-icons/bi";

export default function ReviewsPage() {
  const [isLoading, setIsLoading] = useState(true);
  const [movies, setMovies] = useState([]);

  const [search, setSearch] = useState("");

  const lowerSearch = search.toLowerCase();

  const filterMovie = movies.filter((movie) =>
    movie?.title?.toLowerCase().includes(lowerSearch)
  );

  useEffect(() => {
    async function loadData() {
      setIsLoading(true);
      const api = await fetch("http://localhost:3000/movies");
      const result = await api.json();
      setMovies(result);
      setIsLoading(false);
    }

    loadData();
  }, []);

  return (
    <div className={styles.container}>
      <Head>
        <title>All Reviews</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />
      {isLoading ? (
        <div>
          <Loanding />
        </div>
      ) : (
        <div className={styles.mainContainer}>
          <div className={styles.inputContainer}>
            <div>
              <BiSearch />
            </div>
            <input
              placeholder="Serach Reviews"
              type="text"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
            />
          </div>

          <div className={styles.cardsContainer}>
            {filterMovie.map((movie) => (
              <div className={styles.cardContainer} key={movie.id}>
                <Card
                  title={movie.title}
                  image={movie.movieImg}
                  stars={movie.stars}
                  id={movie.id}
                />
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
