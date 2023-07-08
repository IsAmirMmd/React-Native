import React, { useContext, useState } from "react";

export const ProductContext = React.createContext(); // state
export const ProductContextDispatcher = React.createContext(); // set state

const ProductProvider = ({ children }) => {
  const [products, setProduct] = useState([
    { name: "iphone", price: 699, id: 1, amount: 1 },
    { name: "iPad", price: 799, id: 2, amount: 1 },
    { name: "socks", price: 29, id: 3, amount: 1 },
  ]);
  console.log("test");
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
  const products = useContext(ProductContext);

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

  return { clickHandler, increaseHandler, chnageHandler, decreaseHandler };
};
