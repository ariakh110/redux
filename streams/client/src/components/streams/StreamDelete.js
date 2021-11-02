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
  renderContent = () => {
    if (!this.props.stream){
      return ('Are you sure you want to delete this stream?');
    }
    return `Are you sure you want to delete this stream with title ( ${this.props.stream.title} ) ?`
  }
  render() {
    return (
      <>
        <Modal
          title="Delete Stream"
          content={this.renderContent()}
          actions={this.renderActions()}
          onDismiss={() => history.push("/")}
        />
      </>
    );
  }
}
const mapStateToProps = (state, ownProps) => {
  return { stream: state.streams[ownProps.match.params.id] };
};

export default connect(mapStateToProps, { fetchStream, deleteStream })(
  StreamDelete
);
