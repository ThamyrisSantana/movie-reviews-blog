import React, { useState, useEffect } from "react";
import { useRouter } from "next/router";
import Head from "next/head";

import styles from "./editReview.module.scss";
import Header from "../../components/header/header";
import toast, { Toaster } from "react-hot-toast";
import Modal from "../../components/modal/modal";
import EditReviewForm from "../../components/form-edit/EditReviewForm";

export default function EditReview() {
  const [movie, setMovie] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  const [newReview, setnewReview] = useState({});

  const [deletedStatus, setDeletedStatus] = useState(false);
  const [openModal, setOpenModal] = useState(false);

  const [movieTitle, setMovieTitle] = useState("");
  const [description, setDescription] = useState("");
  const [director, setDirector] = useState("");
  const [movieImg, setMovieImg] = useState("");
  const [review, setReview] = useState("");
  const [stars, setStars] = useState("");

  const allFields =
    movieTitle && movieImg && description && director && review && stars;

  const router = useRouter();
  const id = router.query.id;

  console.log(movieTitle);

  // PATCH REQUEST -------------------------------------------------------------

  useEffect(() => {
    async function addMovie() {
      if (isLoading === false && allFields !== undefined && allFields !== "") {
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
        setMovie(data.id);
      }
    }

    addMovie();
  }, [newReview, id, isLoading, allFields]);

  // GET REQUEST -------------------------------------------------------------

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

  // DELETE REQUEST -------------------------------------------------------------

  useEffect(() => {
    async function remove() {
      if (deletedStatus === true) {
        fetch(`http://localhost:3000/movies/${id}`, {
          method: "DELETE",
        }).then((result) => {
          result.json().then((resp) => {
            setMovie(resp);
          });
        });
      }
    }
    remove();
  }, [id, deletedStatus]);

  function updateReview(e) {
    e.preventDefault();

    const newReview = {
      title: movieTitle,
      description: description,
      stars: stars,
      movieImg: movieImg,
      review: review,
      director: director,
    };

    setnewReview(newReview);
    if (allFields != undefined && allFields !== "") {
      toast.success("Review edited", { icon: "💜" });
    } else {
      toast.error("Please update all fields");
    }
  }

  function deleteReview() {
    openModal ? setOpenModal(false) : setOpenModal(true);
  }

  return (
    <div>
      <Head>
        <title>Edit Review</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/movie-logo.svg" />
      </Head>
      <Header />

      <main className={styles.main}>
        {isLoading ? (
          <div>Loading...</div>
        ) : (
          <>
            {deletedStatus ? (
              <div> Review Deleted </div>
            ) : (
              <div className={styles.formContainer}>
                <div>
                  <EditReviewForm
                    setMovieTitle={setMovieTitle}
                    setStars={setStars}
                    setDescription={setDescription}
                    setReview={setReview}
                    setDirector={setDirector}
                    setMovieImg={setMovieImg}
                    movie={movie}
                    updateReview={updateReview}
                    deleteReview={deleteReview}
                  />
                </div>

                {openModal && (
                  <Modal
                    setDeletedStatus={setDeletedStatus}
                    deleteReview={deleteReview}
                    setOpenModal={setOpenModal}
                  />
                )}
                <Toaster />
              </div>
            )}
          </>
        )}
      </main>
    </div>
  );
}
