import React, { Component } from "react";
class ClassTimer extends Component {
  state = {
    count: 0,
  };
  
  componentDidMount() {
    this.myTimer = setInterval(() => {
      this.setState({ count: this.state.count + 1 });
    }, 1000); // in every 1 min
  }

  componentWillUnmount() {
    clearInterval(this.myTimer);
  }

  render() {
    return <div>Class Interval</div>;
  }
}

export default ClassTimer;
