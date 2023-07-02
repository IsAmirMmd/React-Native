import React, { Component } from "react";
class HooksCounterClass extends Component {
  state = {
    count: 0,
  };
  clickHandler = () => {
    this.setState((prevState) => {
      return { count: prevState.count + 1 };
    });
  };
  render() {
    return (
      <div>
        <h2>hook count is : {this.state.count}</h2>
        <button onClick={this.clickHandler}>increase</button>
      </div>
    );
  }
}

export default HooksCounterClass;
