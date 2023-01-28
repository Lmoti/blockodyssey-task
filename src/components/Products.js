import React, { useEffect } from "react";
import "./Products.css";
import Product from "./Product";
import Pagination from "./Pagination";
import { useSearchParams } from "react-router-dom";

const Products = ({ data }) => {
  const [params, setParams] = useSearchParams();
  const page = +params.get("page");
  const limit = +params.get("limit");

  useEffect(() => {
    params.set("len", data.length);
    setParams(params);
  }, [data.length]);

  return (
    <div className="products-container">
      <ul>
        <li className="column">
          <span className="id">상품번호</span>
          <span className="title">상품명</span>
          <span className="brand">브랜드</span>
          <span className="description">상품내용</span>
          <span className="price">가격</span>
          <span className="rating">평점</span>
          <span className="stock">재고</span>
        </li>
        {data
          .slice((page - 1) * limit, (page - 1) * limit + limit)
          .map((product) => (
            <Product key={product.id} product={product} />
          ))}
      </ul>
      <Pagination total={data.length} />
    </div>
  );
};

export default Products;
