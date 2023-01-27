import React, { useState } from "react";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import Product from "./Product";
import Pagenation from "./Pagination";

const getProducts = async () => {
  const response = await axios("https://dummyjson.com/products?limit=100");
  return response;
};

const Products = () => {
  const [page, setPage] = useState(1);
  const [limit, setLimit] = useState(10);
  const { data, isError, error, isLoading } = useQuery(
    ["products"],
    getProducts,
    { staleTime: 2000 }
  );
  if (isLoading) return <h3>Loading...</h3>;
  if (isError) {
    return (
      <>
        <h3>데이터를 받아오지 못했습니다.</h3>
        <div>{error.message}</div>
      </>
    );
  }
  return (
    <>
      <ul>
        {data.data.products
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
        total={data.data.total}
      />
    </>
  );
};

export default Products;
