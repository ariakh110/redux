import React, { Component } from "react";
import ColorContext from "../contexts/ColorContext";
import LanguageContext from "../contexts/LanguageContext";

class Button extends Component {
  //1.provider
  //static contextType = LanguageContext;
  renderSubmitText(value) {
    return value === "en" ? "Submit" : "کلیک";
  }

  renderSubmit = (color) => {
    return (
      <button className={`ui button ${color}`}>
        <LanguageContext.Consumer>
          {(value) => this.renderSubmitText(value)}
        </LanguageContext.Consumer>
      </button>
    );
  };

  render() {
    // const text = this.context === "en" ? "Submit" : "کلیک";
    return (
      <ColorContext.Consumer>
        {(color) => this.renderSubmit(color)}
      </ColorContext.Consumer>
    );
  }
}

export default Button;
