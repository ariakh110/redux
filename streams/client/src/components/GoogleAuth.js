import React, { Component } from "react";

class GoogleAuth extends Component {
  state = { isSignedIn: null };
  componentDidMount() {
    window.gapi.load("auth2",  () => {
      window.gapi.auth2.init({
          client_id:'691913737276-hr26tteg9it5kd8ulrja1feqk9hg02j1.apps.googleusercontent.com',
        }).then(() => {
          this.auth = window.gapi.auth2.getAuthInstance();
          this.setState({ isSignedIn: this.auth.isSignedIn.get() });
        });
    });
  }

  renderAuthBtn() {
    if (this.state.isSignedIn === null) {
      return <div>i dont know if we are signed in</div>;
    } else if (this.state.isSignedIn === true) {
      return <div>we are singed in</div>;
    } else {
      return <div>im not signed in</div>;
    }
  }
  render() {
    return <div>{this.renderAuthBtn()}</div>;
  }
}

export default GoogleAuth;
