import React from "react";

export default class Api extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "know",
      age: "0",
      loading: true,
    };
  }
  async componentDidMount() {
    const url = "http://myjson.dit.upm.es/api/bins/aimw";
    const signal = this.props.signal; 
    const res = await fetch(url,{signal});
    if (!(res.status === 404)) {
      const js = await res.json();
      this.setState({
        name: js.name,
        age: js.age,
        loading: false,
      });
    }
  }
 

  render() {
    if (this.state.loading) return <div> loading ...</div>;
    return (
      <>
        <h1>{this.state.name}</h1>
        <h1>{this.state.age}</h1>
      
      </>
    );
  }
}
