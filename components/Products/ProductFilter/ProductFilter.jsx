import React, { useState } from "react";
import styles from "./ProductFilter.module.css";
const ProductFilter = ({ onFilterChange }) => {
  const handleFilterClick = (tab) => {
    onFilterChange(tab); // Pass the active tab to the parent component or function
  };
  return (
    <div className={styles.tabs}>
      <a onClick={() => handleFilterClick("Tops")}>Tops</a>
      <a onClick={() => handleFilterClick("Bottoms")}>Bottoms</a>
      <a onClick={() => handleFilterClick("Best")}>Best</a>
    </div>
  );
};

export default ProductFilter;
