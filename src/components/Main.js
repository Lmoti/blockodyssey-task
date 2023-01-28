import React, { useEffect } from "react";
import "./Main.css";
import Search from "./Search";
import Products from "./Products";
// import { useProducts } from "../query/useGetProducts";
import axios from "axios";
import { useQuery } from "@tanstack/react-query";
import { queryKeys } from "../query/constant";
import { useSearchParams } from "react-router-dom";

const getProducts = async () => {
  const response = await axios("https://dummyjson.com/products?limit=100");
  return response;
};

const Main = () => {
  // const data = useProducts();

  const [params, setParams] = useSearchParams();

  useEffect(() => {
    if (!params.get("condition")) params.set("condition", "all");
    if (!params.get("keyword")) params.set("keyword", "");
    if (!params.get("page")) params.set("page", 1);
    if (!params.get("limit")) params.set("limit", 10);
    if (!params.get("len")) params.set("len", 100);
    setParams(params);
  }, []);

  const condition = params.get("condition");
  const keyword = params.get("keyword");

  const { data, isError, error, isLoading } = useQuery(
    [queryKeys.products],
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
      <div className="data-length">검색된 데이터 : {params.get("len")}건</div>
      {data.data.products && filterProducts(condition, keyword)}
    </>
  );
};

export default Main;
