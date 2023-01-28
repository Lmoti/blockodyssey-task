import React, { useEffect } from "react";
import "./Products.css";
import Product from "./Product";
import Pagination from "./Pagination";
import { useDispatch, useSelector } from "react-redux";
import { searchActions } from "../store/search-slice";

const Products = ({ data }) => {
  const dispatch = useDispatch();
  const page = useSelector((state) => state.page.page);
  const limit = useSelector((state) => state.page.limit);

  useEffect(() => {
    dispatch(searchActions.setDataLength(data.length));
  }, [data]);

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
