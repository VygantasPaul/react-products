import React from "react";
import styles from "./Social.module.css";
const Social = () => {
  return (
    <div className={styles.socialIcons}>
      <ul>
        <li>
          <a href="#">
            <i className="fa-brands fa-facebook"></i>
          </a>
        </li>
        <li>
          <a href="#">
            <i className="fa-brands fa-twitter"></i>
          </a>
        </li>
        <li>
          <a href="#">
            <i className="fa-brands fa-google"></i>
          </a>
        </li>
      </ul>
    </div>
  );
};

export default Social;
