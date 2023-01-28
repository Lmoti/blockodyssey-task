import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import { queryKeys } from "./constant";

const getProducts = async () => {
  const response = await axios("https://dummyjson.com/products?limit=100");
  return response;
};

export const useProducts = () => {
  const { data, isError, error, isLoading } = useQuery(
    [queryKeys.products],
    () => getProducts(),
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
  return data;
};
