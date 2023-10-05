import { Component } from "react";

class TestClassComponent extends Component {
  //따로 필드 없어도 무방
  constructor(name, age) {
    super();
    this.name = "클래스 컴포넌트";
    this.age = 10;
  }

  render() {
    const { name, age } = this;
    return (
      <div>
        <div>나는 {name}</div>
        <div>나는 {age}살</div>
      </div>
    );
  }
}

export default TestClassComponent;
