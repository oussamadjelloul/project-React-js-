import React from "react";
import PropTypes from "prop-types";

class HellowithState extends React.Component {
  constructor(props) {
    super(props);
    this.state = { name: this.props.name.split(" ")[0] };
  }
  render() {
    return <h1>{this.state.name}</h1>;
  }
}

const FirstComponent = (props) => {
  return <div>Hello, {props.name}! I am a FirstComponent.</div>
};
//arrow components also may have props validation
FirstComponent.propTypes = {
  name: PropTypes.oneOf(['yassine','hicham']),
};
//
export default HellowithState 
export  {FirstComponent};