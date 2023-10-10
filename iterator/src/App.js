import React, { Component } from 'react';

class MyComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      names: ['Hinaya', 'Kovisha']
    };
  }

  componentDidMount() {
   
    this.state.names.forEach((name) => {
      console.log(name); 
    });
  }

  render() {
    return (
      <div>
        {}
      </div>
    );
  }
}

export default MyComponent;
