import React, { Component } from "react";
import axios from "axios";
class ResourceList extends Component {
  state = {
    resource: [],
  };
  async componentDidMount() {
    const resource = await axios.get(
      `https://jsonplaceholder.typicode.com/${this.props.resource}`
    );
    this.setState({ resource: resource.data });
  }
  async componentDidUpdate(prevProps, prevState) {
    if (prevProps.resource !== this.props.resource) {
      const resource = await axios.get(
        `https://jsonplaceholder.typicode.com/${this.props.resource}`
      );
      this.setState({ resource: resource.data });
    }
  }

  render() {
    return <h2>{this.state.resource.length}</h2>;
  }
}

export default ResourceList;
