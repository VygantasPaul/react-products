import React from "react";
import styles from "./Addcart.module.css";
const Addcart = ({ text, onClick, cartCount }) => {
  return (
    <button onClick={onClick} className={styles.addToCart}>
      {text}
    </button>
  );
};

export default Addcart;
