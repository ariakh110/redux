import React, { Component } from "react";

export default class App extends Component {
  state = {
    resource: "posts",
  };
  render() {
    console.log(this.state);
    return (
      <div>
        <div>
          <button onClick={() => this.setState({ resource: "posts" })}>
            posts
          </button>
          <button onClick={() => this.setState({ resource: "todos" })}>
            todos
          </button>
        </div>
        <h2>{this.state.resource}</h2>
      </div>
    );
  }
}
