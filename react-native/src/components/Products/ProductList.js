import Product from "./Product";
import { useProduct, useProductAction } from "../Providers/ProductsProvider";
const ProductList = (props) => {
  const products = useProduct();
  const { clickHandler, increaseHandler, chnageHandler, decreaseHandler } =
    useProductAction();

  const renderProduct = () => {
    if (products.length === 0) {
      return <div>no product</div>;
    }

    return products.map((product, index) => {
      return (
        <Product
          product={product}
          key={index}
          decrease={() => decreaseHandler(product.id)}
          increase={() => increaseHandler(product.id)}
          onDelete={() => clickHandler(product.id)}
          change={(e) => chnageHandler(e, product.id)}
        />
      );
    });
  };
  return <div>{renderProduct()}</div>;
};

export default ProductList;
