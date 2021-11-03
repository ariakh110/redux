import React, { Component } from "react";

class App extends Component {
  state = {
    language: "en",
  };
  onLanguageChange = (language) => {
    this.setState({ language });
  };
  render() {
    return (
      <div className="ui container">
        <div>
          <h3>select a language:</h3>
          <i className="flag us" onClick={() => this.onLanguageChange("en")} />
          <i className="flag ir" onClick={() => this.onLanguageChange("fa")} />
        </div>
        {this.state.language}
      </div>
    );
  }
}

export default App;
