import React from "react";
import styles from "./Header.module.css";

export default function Header() {
  return (
    <div className={styles.header}>
      <ul className={styles.headerItemsContainer}>
        <li className={styles.headerItems}>Home</li>
        <li className={styles.headerItems}>About</li>
        <li className={styles.headerItems}>Reviews</li>
      </ul>
    </div>
  );
}
