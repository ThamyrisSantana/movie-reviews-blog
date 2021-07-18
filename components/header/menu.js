import React, { useState } from "react";
import Link from "next/link";
import { HiOutlineMenuAlt3 } from "react-icons/hi";
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
        <div className={styles.menuWraper}>
          <HiOutlineMenuAlt3 className={styles.menu} onClick={changeMenu} />
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
        <div>
          <HiOutlineMenuAlt3 className={styles.menu} onClick={changeMenu} />
        </div>
      )}
    </>
  );
}
