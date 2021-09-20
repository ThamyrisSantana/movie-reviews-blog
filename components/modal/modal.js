import React from "react";
import styles from "./modal.module.scss";

const Modal = ({ setDeletedStatus, deleteReview, setOpenModal }) => {
  function changeStatus() {
    setDeletedStatus(true);
    deleteReview();
  }

  function closeModal() {
    setOpenModal(false);
  }

  return (
    <div className={styles.modalBackground}>
      <div className={styles.modalContainer}>
        <h2>Do you really want to delete?</h2>
        <div>
          <button className={styles.cancel} onClick={closeModal}>
            Cancel
          </button>
          <button className={styles.delete} onClick={changeStatus}>
            Yes
          </button>
        </div>
      </div>
    </div>
  );
};

export default Modal;
