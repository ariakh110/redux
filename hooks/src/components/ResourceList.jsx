import React, { useState, useEffect } from "react";
import axios from "axios";
const ResourceList = ({ resource }) => {
  const [resources, setResources] = useState([]);

  const fetchResource = async (resource) => {
    const { data } = await axios.get(
      `https://jsonplaceholder.typicode.com/${resource}`
    );
    setResources(data);
  };

  useEffect(() => {
    fetchResource(resource);
  }, [resource]);

  return <h2>{resources.length}</h2>;
};

export default ResourceList;
