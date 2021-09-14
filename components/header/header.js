import styles from "./Header.module.scss";
import Link from "next/link";
import Menu from "./menu";

export default function Header() {
  return (
    <div className={styles.header}>
      <ul className={styles.headerItemsContainer}>
        <Link href="/">
          <a className={styles.headerItems}>Home</a>
        </Link>

        <Link href="/reviews">
          <a className={styles.headerItems}>Reviews</a>
        </Link>

        <Link href="/newReview">
          <a className={styles.headerItems}>New review</a>
        </Link>
      </ul>
      <div className={styles.menuContainer}>
        <Menu />
      </div>
    </div>
  );
}
