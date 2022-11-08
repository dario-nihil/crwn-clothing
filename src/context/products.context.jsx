import { createContext, useState, useEffect } from "react";

import { getCategoriesAndDocument } from "../utils/firebase/firebase.utils";

export const ProductsContext = createContext({
  products: [],
});

export const ProductProvider = ({ children }) => {
  const [products, serPorducts] = useState([]);
  const value = { products };

  useEffect(() => {
    const getCategoriesMap = async () => {
      const categoryMap = await getCategoriesAndDocument();
      console.log(categoryMap);
    };

    getCategoriesMap();
  }, []);

  return (
    <ProductsContext.Provider value={value}>
      {children}
    </ProductsContext.Provider>
  );
};
