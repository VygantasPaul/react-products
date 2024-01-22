import { useState } from "react";
import React from "react";
import styles from "./Cart.module.css";
const Cart = ({ cartCount = 0 }) => {
  return (
    <div className={styles.cart}>
      <a>
        <i className="fa-solid fa-cart-shopping"></i>
        <span className={styles.forMobile}>{cartCount}</span>
      </a>
    </div>
  );
};

export default Cart;
