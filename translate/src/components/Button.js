import React, { Component } from "react";
import LanguageContext from "../contexts/LanguageContext";

class Button extends Component {
  //1.provider
  //static contextType = LanguageContext;
  renderSubmit(value) {
    return value === "en" ? "Submit" : "کلیک";
  }
  render() {
    // const text = this.context === "en" ? "Submit" : "کلیک";
    return (
      <button className="ui button primary">
        {/* 2. consumers */}
        <LanguageContext.Consumer>
          {(value) => this.renderSubmit(value)}
        </LanguageContext.Consumer>
      </button>
    );
  }
}

export default Button;
