import React from "react";
import styles from "./Nav.module.css";
const Nav = () => {
  return (
    <nav className={styles.navMenu}>
      <ul>
        <li>
          <a href="">Shop</a>
        </li>
        <li>
          <a href="">Lookbook</a>
        </li>
        <li>
          <a href="">About</a>
        </li>
      </ul>
    </nav>
  );
};

export default Nav;
