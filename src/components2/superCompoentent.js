import React, { Component } from "react";

const superCompoentent = (Updatecompent) => {
  class newComponent extends Component {
    constructor(props) {
      super(props);
      this.state = {
        count: 0,
      };
    }
    increment = () => {
      this.setState((prevState, props) => {
        return { count: prevState.count + 1 };
      });
    };
    render() {
      return (
        <Updatecompent count={this.state.count} increment={this.increment} />
      );
    }
  }
  return newComponent;
};

export default superCompoentent;
