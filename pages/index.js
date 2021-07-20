import Head from "next/head";
import styles from "../styles/Home.module.scss";
import { useState, useEffect } from "react";

import Header from "../components/header/header";
import Card from "../components/card/card";
import Loanding from "../components/loading/Loanding";

export default function Home() {
  const [isLoading, setIsLoading] = useState(true);

  const [movies, setMovies] = useState([]);

  useEffect(() => {
    async function loadData() {
      setIsLoading(true);
      const api = await fetch("http://localhost:3000/movies");
      const result = await api.json();
      console.log(result);
      setMovies(result);
      setIsLoading(false);
    }

    loadData();
  }, []);

  return (
    <div className={styles.container}>
      <Head>
        <title>Movies Reviews</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Header />
      {isLoading ? (
        <main className={styles.mainOff}>
          <Loanding />
        </main>
      ) : (
        <main className={styles.main}>
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
        </main>
      )}
    </div>
  );
}
