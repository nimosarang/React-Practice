import { Component } from "react";

class CounterClass extends Component {
  constructor() {
    super();
    this.state = {
      count: 0,
    };
  }

  setCounter(add) {
    this.setState({
      count: this.state.count + add,
    });
  }

  //   addCounter() {
  //     this.setCounter(1);
  //   }

  render() {
    // const count = this.state.count;
    const { count } = this.state;
    return (
      <div>
        <div>{count}</div>
        {/* 파라미터 담는 두가지 방법 */}
        {/* 첫번째방법은 동일하다, addCounter() {this.setCounter} */}
        <button onClick={() => this.setCounter(1)}>(+)</button>{" "}
        <button onClick={this.setCounter.bind(this, -1)}>(-)</button>
      </div>
    );
  }
}

export default CounterClass;
