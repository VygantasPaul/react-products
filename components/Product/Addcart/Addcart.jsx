import React from "react";
import styles from "./Addcart.module.css";
const Addcart = ({ text, onClick, disabled }) => {
  return (
    <button onClick={onClick} className={styles.addToCart} disabled={disabled}>
      {`${text}`}
    </button>
  );
};

export default Addcart;
