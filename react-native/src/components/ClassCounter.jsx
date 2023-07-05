import React, { Component, useState } from "react";
class ClassCounter extends Component {
  state = {
    name: "",
    count: 0,
  };

  componentDidMount() {
    document.title = `clicked ${this.state.count} times`;
  }

  componentDidUpdate(prevProps, prevState) {
    // in class state ↓
    // if want to check the change of some element not all we use condition
    if (this.state.count !== prevState.count) {
      document.title = `clicked ${this.state.count} times`;
      console.log("the counter number changed");
    }
  }

  render() {
    return (
      <div>
        <input
          type="text"
          onChange={(e) => this.setState({ name: e.target.value })}
          value={this.state.name}
        />
        <button onClick={() => this.setState({ count: this.state.count + 1 })}>
          count : {this.state.count}
        </button>
      </div>
    );
  }
}

export default ClassCounter;
