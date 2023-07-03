import styles from "./product.module.css";

// 3. using component to avoid from complex in code

// we use an shortcut snippet "sfc"

// static data : ->

// const Product = () => {
//   return <p>this is test product</p>;
// };

// dynamic data : ->

const Product = (props_or_any_name) => {
  return (
    <div className={styles.product} onClick={props_or_any_name.click}>
      <p>product name is {props_or_any_name.name}</p>
      <p>product price : {props_or_any_name.price}$</p>
      {/* if our product component has any child we use below ↓ */}
      {props_or_any_name.children}
    </div>
  );
};

export default Product;

// for rendering it :
// 1. we have to import it in app.js
// 2. and then use <export_name /> in app.js

//4. ---------------- use dynamic data for Product class ------- { line 11 } ------
