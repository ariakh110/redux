import React, { useState } from "react";
import axios from "axios";
const ResourceList = () => {
  const [resources, setResources] = useState([]);
  const fetchResource = async () => {
    const { data } = await axios.get(
      `https://jsonplaceholder.typicode.com/${this.props.resource}`
    );
    this.setState({ resources: data });
  };
  return <h2>{resources.length}</h2>;
};

export default ResourceList;
