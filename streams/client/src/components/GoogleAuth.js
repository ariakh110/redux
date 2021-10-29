import React, { Component } from "react";
import { connect } from "react-redux";
import { signIn, signOut } from "../actions";

class GoogleAuth extends Component {
  componentDidMount() {
    window.gapi.load("auth2", () => {
      window.gapi.auth2
        .init({
          client_id:
            "691913737276-hr26tteg9it5kd8ulrja1feqk9hg02j1.apps.googleusercontent.com",
        })
        .then(() => {
          this.auth = window.gapi.auth2.getAuthInstance();
          // this.setState({
          //   isSignedIn: this.auth.isSignedIn.get(),
          // });
          this.onAuthChange(this.auth.isSignedIn.get());
          this.auth.isSignedIn.listen(this.onAuthChange);
        });
    });
  }
  onAuthChange = (isSignedIn) => {
    if (isSignedIn) {
      this.props.signIn(this.auth.currentUser.get().getId());
    } else {
      this.props.signOut();
    }
  };
  onSignOutClick = () => {
    this.auth.signOut();
  };
  onSignInClick = () => {
    this.auth.signIn();
  };
  renderAuthBtn() {
    if (this.props.isSignedIn === null) {
      return null;
    } else if (this.props.isSignedIn) {
      return (
        <button className="ui red google button" onClick={this.onSignOutClick}>
          <i className="google icon" />
          Sign Out
        </button>
      );
    } else {
      return (
        <button className="ui red google button" onClick={this.onSignInClick}>
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
const mapStateToProps = (state) => {
  return { isSignedIn: state.auth.isSignedIn , userID : state.auth.userId};
};
export default connect(mapStateToProps, { signIn, signOut })(GoogleAuth);
