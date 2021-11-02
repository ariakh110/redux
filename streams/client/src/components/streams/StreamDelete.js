import React, { Component } from "react";
import Modal from "../Modal";
import history from "../../history";
import { connect } from "react-redux";
import { fetchStream, deleteStream } from "../../actions";

export class StreamDelete extends Component {
  componentDidMount() {
    this.props.fetchStream(this.props.match.params.id);
  }
  
  renderActions = () => {
    return (
      <>
        <button className="ui red button">Delete</button>
        <button className="ui cancel button" onClick={(e) => history.push("/")}>
          Cancel
        </button>
      </>
    );
  };

  render() {
    return (
      <div>
        <Modal
          title="Delete Stream"
          content="Are you sure you want to delete?"
          actions={this.renderActions()}
          onDismiss={() => history.push("/")}
        />
      </div>
    );
  }
}
const mapStateToProps = (state, ownProps) => {
  return { stream: state.streams[ownProps.match.params.id] };
};

export default connect(mapStateToProps, { fetchStream, deleteStream })(StreamDelete);
