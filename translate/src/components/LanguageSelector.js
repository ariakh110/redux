import React, { Component } from "react";
import LanguageContext from "../contexts/LanguageContext"
export class LanguageSelector extends Component {
    static contextType = LanguageContext;
  render() {
    return (
      <div>
        <h3>select a language:</h3>
        <i
          className="flag us"
          onClick={() => this.context.onLanguageChange("en", "red")}
        />
        <i
          className="flag ir"
          onClick={() => this.context.onLanguageChange("fa", "green")}
        />
      </div>
    );
  }
}

export default LanguageSelector;
