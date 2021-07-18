// import React, { useState } from "react";
import styles from "./Header.module.scss";
import Link from "next/link";
// import { HiOutlineMenuAlt3 } from "react-icons/hi";
import Menu from "./menu";

export default function Header() {
  // const [menu, setMenu] = useState(false);

  // const menuToggle = () => {
  //   if (menu === false) {
  //     setMenu(true);
  //   } else {
  //     setMenu(false);
  //   }
  // };

  return (
    <div className={styles.header}>
      <ul className={styles.headerItemsContainer}>
        <Link href="/">
          <a className={styles.headerItems}>Home</a>
        </Link>

        <Link href="/about">
          <a className={styles.headerItems}>About</a>
        </Link>

        <Link href="/">
          <a className={styles.headerItems}>Reviews</a>
        </Link>
      </ul>
      <div className={styles.menuContainer}>
        <Menu />
      </div>
    </div>
  );
}
