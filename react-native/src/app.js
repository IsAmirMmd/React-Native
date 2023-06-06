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

// class AppComponent extends React.Component {
//   render() {
//     return (
//       <div className="detail" id="about">
//         <h1>we use component method</h1>
//         <Product name="phone" price="699" />
//         <Product name="iPod" price="799" />
//         {/* for children we use this method ↓ */}
//         <Product name="socks" price="25">
//           <p>discount is 15%</p>
//         </Product>
//       </div>
//     );
//   }
// }

// let's check this code with .map ->

class AppComponent extends React.Component {
  state = {
    products: [
      { name: "iphone", price: 699 },
      { name: "iPad", price: 799 },
      { name: "socks", price: 25 },
    ],
  };
  render() {
    return (
      <div className="detail" id="about">
        <h1>we use component method v6</h1>
        {this.state.products.map((product) => {
          return <Product name={product.name} price={product.price} />;
        })}
      </div>
    );
  }
}

export default AppComponent;

// 5. let's convert function to class -> { line 47 }

// 6. using state for make it more dynamic :
//      - adding state to AppComponent -> { line 65 }
