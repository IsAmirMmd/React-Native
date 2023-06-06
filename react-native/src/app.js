import React from "react";
// we import Product.js in 3rd step :
import Product from "./components/Products/Product";

//----------------- we change this code from 2nd step to -> ------------------

// const AppComponent = () => {
//   return (
//     <div className="detail" id="about">
//       <h1>we use component method</h1>
//       <p>test</p>
//     </div>
//   );
// };

//----------------- to this code in 3rd step -> ------------------------------

const AppComponent = () => {
  return (
    <div className="detail" id="about">
      <h1>we use component method</h1>
      <Product />
      <Product />
      <Product />
    </div>
  );
};

export default AppComponent;
