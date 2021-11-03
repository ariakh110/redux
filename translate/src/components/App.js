import React, { Component } from "react";
import ColorContext from "../contexts/ColorContext";
import { LanguageStore } from "../contexts/LanguageContext";

import LanguageSelector from "./LanguageSelector";
import UserCreate from "./UserCreate";

class App extends Component {
  state = {
    language: "fa",
    color: "green",
  };
  onLanguageChange = (language, color) => {
    this.setState({ language, color });
  };
  render() {
    return (
      <div className="ui container">
        <LanguageStore>
          <LanguageSelector />
          <ColorContext.Provider value={"red"}>
            <UserCreate />
          </ColorContext.Provider>
        </LanguageStore>
      </div>
    );
  }
}

export default App;
