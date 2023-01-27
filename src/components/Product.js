import React from "react";

const Product = ({ product }) => {
  return (
    <li className="list">
      <span>{product.id}</span>
      <span>{product.title}</span>
      <span>{product.brand}</span>
      <span>
        {product.description.length > 40
          ? product.description.slice(0, 40) + "..."
          : product.description}
      </span>
      <span>{product.price}</span>
      <span>{product.rating}</span>
      <span>{product.stock}</span>
    </li>
  );
};

export default Product;
