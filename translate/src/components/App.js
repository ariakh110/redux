import React, { Component } from "react";
import ColorContext from "../contexts/ColorContext";
import LanguageContext from "../contexts/LanguageContext";
import UserCreate from "./UserCreate";

class App extends Component {
  state = {
    language: "fa",
    color: "green"
  };
  onLanguageChange = (language, color) => {
    this.setState({ language ,color });
  };
  render() {
    return (
      <div className="ui container">
        <div>
          <h3>select a language:</h3>
          <i className="flag us" onClick={() => this.onLanguageChange("en", "red")} />
          <i className="flag ir" onClick={() => this.onLanguageChange("fa", "green")} />
        </div>
        <ColorContext.Provider value={this.state.color}>
          <LanguageContext.Provider value={this.state.language}>
            <UserCreate></UserCreate>
          </LanguageContext.Provider>
        </ColorContext.Provider>
      </div>
    );
  }
}

export default App;
