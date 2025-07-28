import React, { Component } from "react";

export default class MountingWithClass extends Component {
  constructor() {
    super();
    this.state = { count: 0 };
    this.handleCount = this.handleCount.bind(this);
  }
  handleCount() {
    this.setState({ count: this.state.count + 1 });
  }
  componentDidMount() {
    console.log("first mount");
    console.log(`Count state is changed ${this.state.count}`);
  }
  componentDidUpdate(prevProps, prevState) {
    if (prevState.count !== this.state.count) {
      console.log(`Count state changed to: ${this.state.count}`);
    }
  }
  render() {
    return (
      <>
        <div>
          <h1>sdf</h1>
          <h3>{this.state.count}</h3>
          <button onClick={this.handleCount}>count</button>
        </div>
      </>
    );
  }
}
