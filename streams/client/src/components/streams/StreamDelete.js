import React from "react";
import Modal from "../Modal";
import history from "../../history";
export default function StreamDelete() {
  const actions = (
    <>
      <button className="ui red button">Delete</button>
      <button className="ui cancel button" onClick={(e) => history.push("/")}>Cancel</button>
    </>
  );

  return (
    <div>
      <Modal
        title="Delete Stream"
        content="Are you sure you want to delete?"
        actions={actions}
      />
    </div>
  );
}
