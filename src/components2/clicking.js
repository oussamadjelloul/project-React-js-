import React, { Component } from 'react'
import superCompoentent from './superCompoentent'
 class clicking extends Component {
  render() {
    const {count,increment}=this.props ; 
    return (
      <div>
        <button onClick={increment}>
            this clicking Component {count}
        </button>
      </div>
    )
  }
}

export default superCompoentent(clicking);


