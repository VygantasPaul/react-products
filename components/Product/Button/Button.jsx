import React from "react";
import styles from "./Button.module.css";
const Button = ({ text, onClick }) => {
  return (
    <button type="button" onClick={onClick} className={styles.locationBtn}>
      {text}
    </button>
  );
};

export default Button;
