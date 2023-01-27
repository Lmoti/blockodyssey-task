import React from "react";

import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import Products from "./components/Products";
import Search from "./components/Search";

const queryClient = new QueryClient();

const App = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <Search />
      <Products />
      <ReactQueryDevtools />
    </QueryClientProvider>
  );
};

export default App;
