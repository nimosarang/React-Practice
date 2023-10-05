import { Component } from "react";

class CounterClass extends Component {
  constructor() {
    super();
    this.state = {
      count: 0,
    };
  }

  render() {
    // const count = this.state.count;
    const { count } = this.state;
    return (
      <div>
        <div>{count}</div>
        <button>(+)</button>
        <button>(-)</button>
      </div>
    );
  }
}

export default CounterClass;
