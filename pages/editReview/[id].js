import React, { useState, useEffect } from "react";
import { useRouter } from "next/router";

import styles from "./editReview.module.scss";
import Header from "../../components/header/header";
import toast, { Toaster } from "react-hot-toast";

export default function EditReview() {
  const [movieData, setMovieData] = useState(undefined);

  const [movieTitle, setMovieTitle] = useState("");
  const [description, setDescription] = useState("");
  const [director, setDirector] = useState("");
  const [movieImg, setMovieImg] = useState("");
  const [review, setReview] = useState("");
  const [stars, setStars] = useState("");

  const [newReview, setnewReview] = useState({});

  const router = useRouter();
  const id = router.query.id;

  console.log(movieData);

  useEffect(() => {
    async function addMovie() {
      const requestOptions = {
        method: "PATCH",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(newReview),
      };
      const api = await fetch(
        "http://localhost:3000/movies/" + id,
        requestOptions
      );
      const data = await api.json();
      setMovieData(data.id);
    }

    addMovie();
  }, [newReview, id]);

  function updateReview() {
    const newReview = {
      title: movieTitle,
      description: description,
      stars: stars,
      movieImg: movieImg,
      review: review,
      director: director,
    };

    setnewReview(newReview);
    toast.success("Review edited", { icon: "💜" });
  }

  useEffect(() => {
    async function loadData() {
      const api = await fetch(`http://localhost:3000/movies/${id}`);
      const result = await api.json();
      setMovieData(result);
    }
    if (id) {
      loadData();
    }
  }, [id]);

  return (
    <div>
      <Header />
      <main className={styles.main}>
        <div className={styles.inputContainer}>
          <h3>
            Edit <span>{movieData?.title}</span> review
          </h3>
          <input
            className={styles.title}
            value={movieData?.title}
            placeholder="Title"
            onChange={(e) => setMovieTitle(e.target.value)}
            type="text"
          />
          <input
            className={styles.stars}
            value={movieData?.stars}
            placeholder="Stars"
            onChange={(e) => setStars(e.target.value)}
            type="text"
          />

          <input
            className={styles.director}
            value={movieData?.director}
            placeholder="Director"
            onChange={(e) => setDirector(e.target.value)}
            type="text"
          />
          <input
            className={styles.poster}
            value={movieData?.movieImg}
            placeholder="Poster url"
            onChange={(e) => setMovieImg(e.target.value)}
            type="text"
          />

          <input
            className={styles.description}
            value={movieData?.description}
            placeholder="Description"
            onChange={(e) => setDescription(e.target.value)}
            type="text"
          />
          <input
            className={styles.review}
            value={movieData?.review}
            placeholder="Review"
            onChange={(e) => setReview(e.target.value)}
            type="text"
          />

          <button
            type="submit"
            onClick={updateReview}
            disabled={movieTitle === undefined}
          >
            Add review
          </button>
          <Toaster />
        </div>
      </main>
    </div>
  );
}
