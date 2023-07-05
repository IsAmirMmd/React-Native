import React, { Component, useState } from "react";
// we import Product.js in 3rd step :
import Product from "./components/Products/Product";
import { render } from "react-dom";
import HooksCounter from "./components/HooksCounter";
import HooksCounterClass from "./components/HooksCounterClass";
import FormHook from "./components/FormUser";
import RandomGene from "./components/RandomGenerator";
import FunctionalCounter from "./components/FunctionalCounter";
import ClassCounter from "./components/ClassCounter";

import "./app.css";
import ClassTimer from "./components/ClassTimer";
import HoverCounter from "./components/HOC/hoverCounter";
import ClickCounter from "./components/HOC/clickCounter";
import ClassRef from "./components/ref/classRef";
import InputRef from "./components/ref/InputRef";

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
// const AppComponent = () => {
//   const [products, setProduct] = useState([
//     { name: "iphone", price: 699, id: 1, amount: 1 },
//     { name: "iPad", price: 799, id: 2, amount: 1 },
//     { name: "socks", price: 29, id: 3, amount: 1 },
//   ]);

//   // we have to use handler in the file that we want to set Sate in there

//   const clickHandler = (id) => {
//     setProduct(products.filter((p) => p.id !== id));
//   };
//   const increaseHandler = (id) => {
//     const index = products.findIndex((item) => item.id === id);
//     const product = products[index];
//     console.log(product);
//     product.amount++;
//     const AllPro = [...products];
//     AllPro[index] = product;
//     setProduct(AllPro);
//   };
//   const decreaseHandler = (id) => {
//     const AllPro = [...products];
//     const filtered = AllPro.find((p) => p.id === id);
//     if (filtered.amount >= 2) {
//       filtered.amount--;
//       setProduct(AllPro);
//     } else {
//       const filteredPro = products.filter((p) => p.id !== id);
//       setProduct(filteredPro);
//     }
//   };

//   const chnageHandler = (e, id) => {
//     const AllPro = [...products];
//     const filtered = AllPro.find((p) => p.id === id);
//     filtered.name = e.target.value;
//     setProduct(AllPro);
//   };
//   const renderProduct = () => {
//     return products.map((product, index) => {
//       return (
//         <Product
//           name={product.name}
//           price={product.price}
//           key={index}
//           amount={product.amount}
//           decrease={() => decreaseHandler(product.id)}
//           increase={() => increaseHandler(product.id)}
//           onDelete={() => clickHandler(product.id)}
//           change={(e) => chnageHandler(e, product.id)}
//         />
//       );
//     });
//   };
//   return (
//     <div className="detail" id="about">
//       <h1>we use component method v6</h1>
//       {products.length > 0 ? renderProduct() : "go shopping"}
//       <p>using functional state(call back)</p>
//       <HooksCounter />
//       <p>using class state (call back)</p>
//       <HooksCounterClass />
//       {/* using function state for update Objects' data */}
//       <p>update state(data type = Object )</p>
//       <FormHook />
//       {/* using call back and state to update array */}
//       <RandomGene />
//     </div>
//   );
// };

class AppComponent extends Component {
  state = {
    products: [
      { name: "iphone", price: 699, id: 1, amount: 1 },
      { name: "iPad", price: 799, id: 2, amount: 1 },
      { name: "socks", price: 29, id: 3, amount: 1 },
    ],
    isShow: true,
  };

  clickHandler = (id) => {
    const AllPro = [...this.state.products];
    const filtered = AllPro.filter((p) => p.id != id);
    this.setState({ products: filtered });
  };

  increaseHandler = (id) => {
    const index = this.state.products.findIndex((item) => item.id === id);
    const product = this.state.products[index];
    console.log(product);
    product.amount++;
    const AllPro = [...this.state.products];
    AllPro[index] = product;
    this.setState({ AllPro: this.state.products });
  };

  decreaseHandler = (id) => {
    const AllPro = [...this.state.products];
    const filtered = AllPro.find((p) => p.id === id);
    if (filtered.amount >= 2) {
      filtered.amount--;
      this.setState(AllPro);
    } else {
      const filteredPro = this.state.products.filter((p) => p.id !== id);
      this.setState({ products: filteredPro });
    }
  };

  chnageHandler = (e, id) => {
    const AllPro = [...this.state.products];
    const filtered = AllPro.find((p) => p.id === id);
    filtered.name = e.target.value;
    this.setState(AllPro);
  };

  renderProduct = () => {
    return this.state.products.map((product, index) => {
      return (
        <Product
          name={product.name}
          price={product.price}
          key={index}
          amount={product.amount}
          decrease={() => this.decreaseHandler(product.id)}
          increase={() => this.increaseHandler(product.id)}
          onDelete={() => this.clickHandler(product.id)}
          change={(e) => this.chnageHandler(e, product.id)}
        />
      );
    });
  };

  render() {
    return (
      <div className="detail" id="about">
        <h1>we use component method v6</h1>
        {this.state.products.length > 0 ? this.renderProduct() : "go shopping"}

        <p>using functional state(call back)</p>
        <HooksCounter />

        <p>using class state (call back)</p>
        <HooksCounterClass />

        {/* using function state for update Objects' data */}
        <p>update state(data type = Object )</p>
        <FormHook />

        {/* using call back and state to update array */}
        <RandomGene />

        {/* update dom using useEfffect in functional state */}
        <FunctionalCounter />

        {/* update dom using cdm in class state */}
        <ClassCounter />

        {/* clean-up in class state */}
        <button onClick={() => this.setState({ isShow: !this.state.isShow })}>
          {this.state.isShow ? "hide" : "show"}
        </button>
        <p>{this.state.isShow && <ClassTimer />}</p>

        {/* using HOC */}
        <HoverCounter />
        <ClickCounter />

        {/* createRef in react */}
        {/* make the app in focus after reloading page */}
        <ClassRef />

        {/* input ref example */}
        <InputRef />
      </div>
    );
  }
}

export default AppComponent;

// 5. let's convert function to class -> { line 47 }

// 6. using state for make it more dynamic :
//      - adding state to AppComponent -> { line 65 }

// 7. using functional state instead of class state
