import React, { useContext, useState } from "react";
import { productdata } from "../../db/products";
import _ from "lodash";

const ProductContext = React.createContext(); // state
const ProductContextDispatcher = React.createContext(); // set state

const ProductProvider = ({ children }) => {
  const [products, setProduct] = useState(productdata);

  return (
    <ProductContext.Provider value={products}>
      <ProductContextDispatcher.Provider value={setProduct}>
        {children}
      </ProductContextDispatcher.Provider>
    </ProductContext.Provider>
  );
};

export default ProductProvider;

export const useProduct = () => useContext(ProductContext);

export const useProductAction = () => {
  const setProduct = useContext(ProductContextDispatcher);
  let products = useContext(ProductContext);

  const clickHandler = (id) => {
    setProduct(products.filter((p) => p.id !== id));
  };
  const increaseHandler = (id) => {
    const index = products.findIndex((item) => item.id === id);
    const product = products[index];
    console.log(product);
    product.amount++;
    const AllPro = [...products];
    AllPro[index] = product;
    setProduct(AllPro);
  };
  const decreaseHandler = (id) => {
    const AllPro = [...products];
    const filtered = AllPro.find((p) => p.id === id);
    if (filtered.amount >= 2) {
      filtered.amount--;
      setProduct(AllPro);
    } else {
      const filteredPro = products.filter((p) => p.id !== id);
      setProduct(filteredPro);
    }
  };

  const chnageHandler = (e, id) => {
    const AllPro = [...products];
    const filtered = AllPro.find((p) => p.id === id);
    filtered.name = e.target.value;
    setProduct(AllPro);
  };

  const filterHandler = (e) => {
    if (e.value === "") {
      products = productdata;
      setProduct(productdata);
    } else {
      const filteredProduct = productdata.filter((item) =>
        item.size.includes(e.value)
      );
      products = filteredProduct;
      setProduct(filteredProduct);
    }
  };

  const sortHandlerProduct = (e) => {
    if (e.value === "high") {
      setProduct(_.orderBy(products, ["price"], ["desc"]));
    } else {
      setProduct(_.orderBy(products, ["price"], ["asc"]));
    }
  };

  const searchHandler = (e, filter) => {
    if (e.target.value === "" && filter === "") {
      setProduct(productdata);
    } else if (e.target.value !== "" && filter === "") {
      const filteredProduct = productdata.filter((p) =>
        p.name.toLowerCase().includes(e.target.value)
      );
      setProduct(filteredProduct);
    } else if (e.target.value === "" && filter === "") {
      setProduct(products);
    } else if (e.target.value !== "" && filter !== "") {
      const filteredProduct = products.filter((p) =>
        p.name.toLowerCase().includes(e.target.value)
      );
      setProduct(filteredProduct);
    }
  };

  return {
    clickHandler,
    increaseHandler,
    chnageHandler,
    decreaseHandler,
    filterHandler,
    sortHandlerProduct,
    searchHandler,
  };
};
