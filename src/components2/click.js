import React, { Component } from "react";
class SecondComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      toggle: true,
    };
    // This is to bind context when passing onClick as a callback
    //1
    this.onClick = this.onClick.bind(this);
  }
  //1
  onClick() {
    this.setState((prevState, props) => ({
      toggle: !prevState.toggle,
    }));
  }
  //2
  onClick2 = () => {
    this.setState({
      toggle: !this.state.toggle,
    });
  };
  //3
  onClick3() {
    this.setState({
      toggle: !this.state.toggle,
    });
  }

  render() {
    console.log(this.state.toggle);
    return (
      <>
        <div onClick={this.onClick}>
          Hello, {this.props.name}! I am a SecondComponent.
          <br />
          Toggle is: {`${this.state.toggle}`}
        </div>

        <div onClick={this.onClick2}>
          Hello, {this.props.name}! I am a SecondComponent.
          <br />
          Toggle is: {`${this.state.toggle}`}
        </div>
        {/* 3 */}
        <div
          onClick={() => {
            this.onClick3();
          }}
        >
          Hello, {this.props.name}! I am a SecondComponent.
          <br />
          Toggle is: {`${this.state.toggle}`}
        </div>
      </>
    );
  }
}
export default SecondComponent;
