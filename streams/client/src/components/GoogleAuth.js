import React, { Component } from "react";

class GoogleAuth extends Component {
  state = { isSignedIn: null };
  componentDidMount() {
    window.gapi.load("auth2",  () => {
      window.gapi.auth2.init({
          client_id:'691913737276-hr26tteg9it5kd8ulrja1feqk9hg02j1.apps.googleusercontent.com',
        }).then(() => {
          this.auth = window.gapi.auth2.getAuthInstance();
          this.setState({ isSignedIn: this.auth.isSignedIn.get() }); //**later refactor this*/
          this.auth.isSignedIn.listen(this.onAuthChange);
        });
    });
  }
  onAuthChange = () => {
    this.setState({ isSignedIn: this.auth.isSignedIn.get() });
  }
  signOut = () => {
    this.auth.signOut();
  }
  signIn = () => {
    this.auth.signIn();
  }
  renderAuthBtn() {
    if (this.state.isSignedIn === null) {
      return null;
    } else if (this.state.isSignedIn) {
      return (
      <button className="ui red google button" onClick={this.signOut}>
        <i className="google icon"/>
        Sign Out
      </button>
      );
    } else {
      return (
        <button className="ui red google button" onClick={this.signIn}>
          <i className="google icon"/>
          Sign In
        </button>
        );
    }
  }
  render() {
    return <div>{this.renderAuthBtn()}</div>;
  }
}

export default GoogleAuth;
