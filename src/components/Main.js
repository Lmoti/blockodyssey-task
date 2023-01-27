import React from "react";
import Search from "./Search";
import Products from "./Products";
import axios from "axios";
import { useQuery } from "@tanstack/react-query";
import { useSelector } from "react-redux";

const getProducts = async () => {
  const response = await axios("https://dummyjson.com/products?limit=100");
  return response;
};

const Main = () => {
  const condition = useSelector((state) => state.search.condition);
  const keyword = useSelector((state) => state.search.keyword);

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

  const filterProducts = (condition, keyword) => {
    if (condition === "all" && keyword === "") {
      return <Products data={data.data.products} />;
    } else if (condition === "all" && keyword !== "") {
      return (
        <Products
          data={data.data.products.filter(
            (el) =>
              el.title.includes(keyword) ||
              el.brand.includes(keyword) ||
              el.description.includes(keyword)
          )}
        />
      );
    } else if (condition === "title") {
      return (
        <Products
          data={data.data.products.filter((el) => el.title.includes(keyword))}
        />
      );
    } else if (condition === "brand") {
      return (
        <Products
          data={data.data.products.filter((el) => el.brand.includes(keyword))}
        />
      );
    } else if (condition === "description") {
      return (
        <Products
          data={data.data.products.filter((el) =>
            el.description.includes(keyword)
          )}
        />
      );
    }
  };

  return (
    <>
      <Search />
      {filterProducts(condition, keyword)}
    </>
  );
};

export default Main;
