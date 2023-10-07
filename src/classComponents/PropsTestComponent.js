import { Component } from "react";

export default class PropsTestComponent extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { name } = this.props;
    return <div>{name}</div>;
  }
}
