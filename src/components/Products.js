import React from "react";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";

const getProducts = async () => {
  const response = await axios("https://dummyjson.com/products?limit=100");
  return response;
};

const Products = () => {
  const { data } = useQuery(["products"], getProducts);
  if (!data) return <div />;
  return <div></div>;
};

export default Products;
