import React, { useState } from "react";
import styles from "./Product.module.css";
import Button from "./Button/Button";
import Addcart from "./Addcart/Addcart";
const Product = ({ title, price, image, location, category, units_left }) => {
  const imageUrl = image || "https://placeholder.com/150";

  const [showLocation, setLocation] = useState(false);
  const [cartCount, setcartCount] = useState(0);

  const addToCart = () => {
    setcartCount(cartCount + 1);
  };
  const handleClick = () => {
    setLocation(!showLocation);
  };

  return (
    <div className={`${styles.product}`}>
      {units_left >= 1 ? (
        <div className={styles.productCard}>
          <img src={imageUrl} alt="" />
          <div className={styles.productInfo}>
            <h2 className={styles.title}>{title}</h2>
            <h3 className={styles.units}>Quantity: {units_left}</h3>
            <h4 className={styles.price}>{price}$</h4>
            <h5>Category: {category}</h5>
          </div>
          <Addcart
            onClick={addToCart}
            cartCount={cartCount}
            text={`Add to cart ${cartCount}`}
          />
          <Button
            text={showLocation ? "Hide location" : "Show location"}
            onClick={handleClick}
          />
          {showLocation && <h5>{location}</h5>}
        </div>
      ) : (
        <div>
          <p> 0 in stock</p>
        </div>
      )}
    </div>
  );
};

export default Product;
