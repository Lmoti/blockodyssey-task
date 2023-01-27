import React, { useEffect, useState } from "react";
import Product from "./Product";
import Pagenation from "./Pagination";
import { useDispatch } from "react-redux";
import { searchActions } from "../store/search-slice";

const Products = ({ data }) => {
  const [page, setPage] = useState(1);
  const [limit, setLimit] = useState(10);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(searchActions.setDataLength(data.length));
  }, [data]);

  return (
    <>
      <ul>
        <li className="list">
          <span>상품번호</span>
          <span>상품명</span>
          <span>브랜드</span>
          <span>상품내용</span>
          <span>가격</span>
          <span>평점</span>
          <span>재고</span>
        </li>
        {data
          .slice((page - 1) * limit, (page - 1) * limit + limit)
          .map((product) => (
            <Product key={product.id} product={product} />
          ))}
      </ul>
      <Pagenation
        page={page}
        setPage={setPage}
        limit={limit}
        setLimit={setLimit}
        total={data.length}
      />
    </>
  );
};

export default Products;
