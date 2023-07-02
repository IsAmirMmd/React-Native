import React, { Component, useState } from "react";
// we import Product.js in 3rd step :
import Product from "./components/Products/Product";
import { render } from "react-dom";
import HooksCounter from "./components/HooksCounter";
import HooksCounterClass from "./components/HooksCounterClass";
import FormHook from "./components/FormUser";
import RandomGene from "./components/RandomGenerator";

import "./app.css";

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
// ----------------- class state code ↓ ------------------

// class AppComponent extends Component {
//   state = {
//     products: [
//       { name: "iphone", price: 699 },
//       { name: "iPad", price: 799 },
//       { name: "socks", price: 25 },
//     ],
//   };
//   clickHandler = () => {
//     this.setState({
//       products: [
//         { name: "iphone", price: 700 },
//         { name: "iPad", price: 800 },
//         { name: "socks", price: 29 },
//       ],
//     });
//   };
//   render() {
//     return (
//       <div className="detail" id="about">
//         <h1>we use component method v6</h1>
//         {this.state.products.map((product) => {
//           return <Product name={product.name} price={product.price} />;
//         })}
//         <button onClick={this.clickHandler}>change price</button>
//       </div>
//     );
//   }
// }

// export default AppComponent;
// ------------------ functional state code ↓ -----------------
const AppComponent = () => {
  const [products, setProduct] = useState([
    { name: "iphone", price: 699 },
    { name: "iPad", price: 799 },
    { name: "socks", price: 29 },
  ]);

  const clickHandler = () => {
    setProduct([
      { name: "iphone 12", price: 700 },
      { name: "iPad", price: 800 },
      { name: "socks", price: 30 },
    ]);
  };
  return (
    <div className="detail" id="about">
      <h1>we use component method v6</h1>
      {products.map((product) => {
        return <Product name={product.name} price={product.price} />;
      })}
      <button onClick={clickHandler}>change price</button>
      <p>using functional state(call back)</p>
      <HooksCounter />
      <p>using class state (call back)</p>
      <HooksCounterClass />
      {/* using function state for update Objects' data */}
      <p>update state(data type = Object )</p>
      <FormHook />
      {/* using call back and state to update array */}
      <RandomGene />
    </div>
  );
};

export default AppComponent;

// 5. let's convert function to class -> { line 47 }

// 6. using state for make it more dynamic :
//      - adding state to AppComponent -> { line 65 }

// 7. using functional state instead of class state
