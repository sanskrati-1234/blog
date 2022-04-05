import { Component } from "react";

export default class Demo1 extends Component {
  constructor() {
    super();
    this.state = {
      data: 1,
    };
  }
  update() {
    this.setState({ data: this.state.data + 1 });
  }

  render() {
    return (
      <div>
        <h1>{this.state.data}</h1>
        <button onClick={() => this.update()}>Click me</button>
      </div>
    );
  }
}
