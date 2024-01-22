import React, { useEffect, useState } from "react";
import Product from "../Product/Product";
import styles from "./Products.module.css";
import ProductFilter from "./ProductFilter/ProductFilter";
import axios from "axios";

const Products = ({ products }) => {
  const [currentFilter, setCurrentFilter] = useState("Tops");

  const handleFilterChange = (filter) => {
    setCurrentFilter(filter);
  };

  return (
    <>
      {products && (
        <main className={styles.productsWrap}>
          <h2>Products</h2>
          <ProductFilter onFilterChange={handleFilterChange} />
          <div className={styles.products}>
            {products.map((product) => {
              if (
                (currentFilter === "Tops" && product.category === "Tops") ||
                (currentFilter === "Bottoms" &&
                  product.category === "Bottoms") ||
                (currentFilter === "Best" && product.category === "Best")
              ) {
                return (
                  <Product
                    key={product.id}
                    image={product.image}
                    title={product.title}
                    price={product.price}
                    location={product.location}
                    units_left={product.units_left}
                  />
                );
              }
              return null;
            })}
          </div>
        </main>
      )}
    </>
  );
};

export default Products;
