import React, { useState } from "react";
import ResourceList from "./ResourceList";
import UserList from "./UserList";

const App = () => {
  const [resource, setResource] = useState("posts");

  return(
      <div>
        <div>
          <h1>
            Users
          </h1>
          <UserList/>
        </div>
        <div>
          <button onClick={() => setResource("posts")}>
            posts
          </button>
          <button onClick={() => setResource("todos")}>
            todos
          </button>
        </div>
        <ResourceList resource={resource}/>
      </div>
    );
}
export default  App;