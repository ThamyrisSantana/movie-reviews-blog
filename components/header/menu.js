import React, { useState } from "react";
import Link from "next/link";
import { HiMenuAlt2 } from "react-icons/hi";
import styles from "./Header.module.scss";

export default function Menu() {
  const [menuToggle, setMenuToggle] = useState(false);

  function changeMenu() {
    if (menuToggle === false) {
      setMenuToggle(true);
    } else {
      setMenuToggle(false);
    }
  }

  return (
    <>
      {menuToggle ? (
        <div className={styles.menuContainer}>
          <HiMenuAlt2 className={styles.menu} onClick={changeMenu} />
          <ul className={styles.menuItemsContainer}>
            <Link href="/">
              <a className={styles.menuItems}>Home</a>
            </Link>

            <Link href="/about">
              <a className={styles.menuItems}>About</a>
            </Link>

            <Link href="/">
              <a className={styles.menuItems}>Reviews</a>
            </Link>
          </ul>
        </div>
      ) : (
        <div className={styles.menuContainer}>
          <HiMenuAlt2 className={styles.menu} onClick={changeMenu} />
        </div>
      )}
    </>
  );
}
