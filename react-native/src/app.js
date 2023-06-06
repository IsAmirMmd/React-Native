import React from "react";
// we import Product.js in 3rd step :
import Product from "./components/Products/Product";
import { render } from "react-dom";

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

// const AppComponent = () => {
//   return (
//     <div className="detail" id="about">
//       <h1>we use component method</h1>
//       <Product />
//       <Product />
//       <Product />
//     </div>
//   );
// };

//----------------- to this code in 4rd step with dynamic data -> ------------------------------

// const AppComponent = () => {
//   return (
//     <div className="detail" id="about">
//       <h1>we use component method</h1>
//       <Product name="phone" price="699" />
//       <Product name="iPod" price="799" />
//       {/* for children we use this method ↓ */}
//       <Product name="socks" price="25">
//         <p>discount is 15%</p>
//       </Product>
//     </div>
//   );
// };

//----------------- to this code in 5th step with converting function to class  -> ----------------

class AppComponent extends React.Component {
  render() {
    return (
      <div className="detail" id="about">
        <h1>we use component method</h1>
        <Product name="phone" price="699" />
        <Product name="iPod" price="799" />
        {/* for children we use this method ↓ */}
        <Product name="socks" price="25">
          <p>discount is 15%</p>
        </Product>
      </div>
    );
  }
}

export default AppComponent;

// 5. let's convert function to class -> { line 47 }
