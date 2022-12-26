import React, { Component } from 'react'
import superCompoentent from './superCompoentent'
 class hover extends Component {
  render() {
    const count = this.props.count; 
    const increment = this.props.increment ;
    return (
      <div>
        <button onBlur={increment}>
            this hover Component {count}
        </button>
      </div>
    )
  }
}

export default superCompoentent(hover);


