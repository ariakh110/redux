import React, { Component } from "react";

export class LanguageSelector extends Component {
  render() {
    return (
      <div>
        <h3>select a language:</h3>
        <i
          className="flag us"
          onClick={() => this.props.onLanguageChange("en", "red")}
        />
        <i
          className="flag ir"
          onClick={() => this.props.onLanguageChange("fa", "green")}
        />
      </div>
    );
  }
}

export default LanguageSelector;
