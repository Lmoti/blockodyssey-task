import React from "react";

import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import Products from "./components/Products";

const queryClient = new QueryClient();

const App = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <Products />
    </QueryClientProvider>
  );
};

export default App;
