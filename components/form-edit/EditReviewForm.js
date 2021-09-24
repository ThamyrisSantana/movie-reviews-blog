import React from "react";
import styles from "./editReviewForm.module.scss";

const EditReviewForm = (props) => {
  return (
    <div className={styles.formContainer}>
      <h3>Edit review</h3>

      <form>
        <div className={styles.inputDiv}>
          <label htmlFor="title">Title</label>
          <input
            className={styles.title}
            defaultValue={props.movie?.title}
            placeholder="Title"
            onChange={(e) => props.setMovieTitle(e.target.value)}
            type="text"
            required
            id="title"
          />
        </div>

        <div className={styles.inputDiv}>
          <label htmlFor="stars">Stars</label>
          <input
            className={styles.stars}
            defaultValue={props.movie?.stars}
            placeholder="Stars"
            onChange={(e) => props.setStars(e.target.value)}
            type="text"
            required
            id="stars"
          />
        </div>

        <div className={styles.inputDiv}>
          <label htmlFor="director">Director</label>
          <input
            className={styles.director}
            defaultValue={props.movie?.director}
            placeholder="Director"
            onChange={(e) => props.setDirector(e.target.value)}
            type="text"
            required
            id="director"
          />
        </div>

        <div className={styles.inputDiv}>
          <label htmlFor="poster">Poster</label>
          <input
            className={styles.poster}
            defaultValue={props.movie?.movieImg}
            placeholder="Poster url"
            onChange={(e) => props.setMovieImg(e.target.value)}
            type="text"
            required
            id="poster"
          />
        </div>

        <div className={styles.inputDiv}>
          <label htmlFor="description">Description</label>

          <input
            className={styles.description}
            defaultValue={props.movie?.description}
            placeholder="Description"
            onChange={(e) => props.setDescription(e.target.value)}
            type="text"
            required
            id="description"
          />
        </div>

        <div className={styles.inputDiv}>
          <label htmlFor="review">Review</label>
          <input
            className={styles.review}
            defaultValue={props.movie?.review}
            placeholder="Review"
            onChange={(e) => props.setReview(e.target.value)}
            type="text"
            required
            id="review"
          />
        </div>

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
      </form>
    </div>
  );
};

export default EditReviewForm;
