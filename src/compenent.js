import React, { Component } from 'react';

class MyComponent extends Component {
  constructor(props) {
    super(props);

    // Initialize the state
    this.state = {
      count: 0,
    };
  }

  render() {
    return (
      <div>
        <h1>Class-Based Component with State</h1>
        <p>Count: {this.state.count}</p>
        <button onClick={this.incrementCount}>Increment</button>
      </div>
    );
  }

  incrementCount = () => {
    // Update the state by using this.setState()
    this.setState((prevState) => ({
      count: prevState.count + 1,
    }));
  };
}

export default MyComponent;
