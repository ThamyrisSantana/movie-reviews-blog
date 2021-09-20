import React from "react";
import styles from "./styles.module.scss";

const EditReviewForm = (props) => {
  return (
    <div className={styles.formContainer}>
      <h3>Edit review</h3>

      <input
        className={styles.title}
        required
        value={props.movie?.title}
        placeholder="Title"
        onChange={(e) => props.setMovieTitle(e.target.value)}
        type="text"
      />
      <input
        className={styles.stars}
        value={props.movie?.stars}
        placeholder="Stars"
        onChange={(e) => props.setStars(e.target.value)}
        type="text"
        required
      />

      <input
        className={styles.director}
        value={props.movie?.director}
        placeholder="Director"
        onChange={(e) => props.setDirector(e.target.value)}
        type="text"
        required
      />
      <input
        className={styles.poster}
        value={props.movie?.movieImg}
        placeholder="Poster url"
        onChange={(e) => props.setMovieImg(e.target.value)}
        type="text"
        required
      />

      <input
        className={styles.description}
        value={props.movie?.description}
        required
        placeholder="Description"
        onChange={(e) => props.setDescription(e.target.value)}
        type="text"
      />
      <input
        className={styles.review}
        value={props.movie?.review}
        placeholder="Review"
        onChange={(e) => props.setReview(e.target.value)}
        type="text"
        required
      />

      <div>
        <button
          className={styles.editButton}
          type="submit"
          onClick={props.updateReview}
        >
          Update
        </button>

        <button
          className={styles.deleteButton}
          type="submit"
          onClick={props.deleteReview}
        >
          Remove
        </button>
      </div>
    </div>
  );
};

export default EditReviewForm;
