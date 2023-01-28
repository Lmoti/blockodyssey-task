import React from "react";

const Product = ({ product }) => {
  return (
    <li className="list">
      <span className="id">{product.id}</span>
      <span className="title">{product.title}</span>
      <span className="brand">{product.brand}</span>
      <span className="description">
        {product.description.length > 40
          ? product.description.slice(0, 40) + "..."
          : product.description}
      </span>
      <span className="price">${product.price.toLocaleString("ko-KR")}</span>
      <span className="rating">{product.rating}</span>
      <span className="stock">{product.stock}</span>
    </li>
  );
};

export default Product;
