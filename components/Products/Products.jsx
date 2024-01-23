import React, { useState } from "react";
import Product from "../Product/Product";
import styles from "./Products.module.css";
import ProductFilter from "./ProductFilter/ProductFilter";

const Products = ({ products, updateCartCount }) => {
  const [currentFilter, setCurrentFilter] = useState("Tops");
  const [cartCount, setCartCount] = useState(0);
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
                    category={product.category}
                    units_left={product.units_left}
                    updateCartCount={updateCartCount}
                    cartCount={cartCount}
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
