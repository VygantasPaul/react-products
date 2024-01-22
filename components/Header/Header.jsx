import React, { useState } from "react";
import styles from "./header.module.css";
import Nav from "./Nav/Nav";
import Logo from "./Logo/Logo";
import Social from "./Social/Social";
import Cart from "./Cart/Cart";

const Header = ({ cartCount }) => {
  return (
    <>
      <header className={styles.wrapper}>
        <div className={styles.hamburger}>
          <i className="fa-solid fa-bars"></i>
        </div>
        <Nav />
        <Logo />
        <div className={styles.rightNav}>
          <Social />
          <Cart cartCount={cartCount} />
        </div>
      </header>
    </>
  );
};

export default Header;
