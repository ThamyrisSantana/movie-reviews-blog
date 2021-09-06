import React, { useState, useEffect } from "react";
import Card from "../components/card/card";
import Header from "../components/header/header";
import Loanding from "../components/loading/Loanding";
import styles from "../styles/reviewsPage.module.scss";

export default function ReviewsPage() {
  const [isLoading, setIsLoading] = useState(true);
  const [movies, setMovies] = useState([]);

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
      <Header />
      {isLoading ? (
        <div>
          <Loanding />
        </div>
      ) : (
        <div className={styles.mainContainer}>
          <div className={styles.inputContainer}>
            <input
              type="text"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
            />
          </div>

          <div className={styles.cardsContainer}>
            {movies.map((movie) => (
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
