import React, { useState, useEffect } from "react";
import Head from "next/head";
import Link from "next/link";

import styles from "../styles/Admin.module.scss";
import Loanding from "../components/loading/Loanding";
import Header from "../components/header/header";

import { HiPencil, HiOutlinePlusSm } from "react-icons/hi";

export default function AdminPage() {
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
      <Head>
        <title>Admin</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/movie-logo.svg" />
      </Head>
      <Header />
      {isLoading ? (
        <div>
          <Loanding />
        </div>
      ) : (
        <main className={styles.main}>
          <div className={styles.addButtonContainer}>
            <Link href="/newReview">
              <a className={styles.addButton}>
                <HiOutlinePlusSm className={styles.addButtonIcon} />
                Add review
              </a>
            </Link>
          </div>
          <div className={styles.box}>
            {movies.map((movie) => (
              <div className={styles.movieContainer} key={movie.id}>
                <Link href={`/review/${movie.id}`}>
                  <a>{movie.title}</a>
                </Link>
                <div className={styles.buttons}>
                  <Link href={`/editReview/${movie.id}`}>
                    <a className={styles.editButton}>
                      <HiPencil />
                    </a>
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </main>
      )}
    </div>
  );
}
