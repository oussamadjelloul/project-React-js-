import React from 'react'
const Child = (props) => {
  return <div>{props.content}</div>;
};
export default Child;

// export default class Childre extends React.Component{
//     render(){
//         return(
//             <div>{this.props.content}</div>
//         );
//     }
// }
