/* eslint-disable @next/next/no-img-element */
import styles from "./Header.module.scss";
import Link from "next/link";

import Menu from "./menu";
import { HiUserCircle } from "react-icons/hi";
export default function Header() {
  return (
    <div className={styles.header}>
      <div className={styles.iconContainer}>
        <Link href="/">
          <a>
            <img src="/movie-icon.svg" alt="" />
          </a>
        </Link>
      </div>
      <ul className={styles.headerItemsContainer}>
        <Link href="/">
          <a className={styles.headerItems}>Home</a>
        </Link>

        <Link href="/reviews">
          <a className={styles.headerItems}>Reviews</a>
        </Link>

        <Link href="/favorites">
          <a className={styles.headerItems}>Favorites</a>
        </Link>
        <Link href="/admin">
          <a className={styles.headerItems}>
            <HiUserCircle className={styles.icon} />
          </a>
        </Link>
      </ul>
      <div className={styles.menuContainer}>
        <Menu />
      </div>
    </div>
  );
}
