import React, { Component, createRef } from "react";
class ClassRef extends Component {
  state = {};
  constructor(props) {
    super(props);
    this.inputRef = createRef();
  }
  componentDidMount() {
    this.inputRef.current.focus();
  }
  render() {
    return (
      <div>
        <input type="text" ref={this.inputRef} />
      </div>
    );
  }
}

export default ClassRef;
