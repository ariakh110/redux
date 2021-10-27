import React, { Component } from "react";
import { connect } from "react-redux";
import { signIn, signOut } from "../actions";

class GoogleAuth extends Component {
  state = { isSignedIn: null };
  componentDidMount() {
    window.gapi.load("auth2", () => {
      window.gapi.auth2
        .init({
          client_id:
            "691913737276-hr26tteg9it5kd8ulrja1feqk9hg02j1.apps.googleusercontent.com",
        })
        .then(() => {
          this.auth = window.gapi.auth2.getAuthInstance();
          const isSignedIn = this.setState({
            isSignedIn: this.auth.isSignedIn.get(),
          });
          this.auth.isSignedIn.listen(this.onAuthChange);
        });
    });
  }
  onAuthChange = (isSignedIn) => {
    if (isSignedIn) {
      this.props.signIn();
    } else {
      this.props.signOut();
    }
  };
  signOut = () => {
    this.auth.signOut();
  };
  signIn = () => {
    this.auth.signIn();
  };
  renderAuthBtn() {
    if (this.state.isSignedIn === null) {
      return null;
    } else if (this.state.isSignedIn) {
      return (
        <button className="ui red google button" onClick={this.signOut}>
          <i className="google icon" />
          Sign Out
        </button>
      );
    } else {
      return (
        <button className="ui red google button" onClick={this.signIn}>
          <i className="google icon" />
          Sign In
        </button>
      );
    }
  }
  render() {
    return <div>{this.renderAuthBtn()}</div>;
  }
}

export default connect(null, { signIn, signOut })(GoogleAuth);
