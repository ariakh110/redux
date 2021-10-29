import React, { Component } from "react";
import { Field, reduxForm } from "redux-form";
class StreamCreate extends Component {
  renderInput({ input, label }) {
    //can be {input} insted of formProps
    return (
      <div className="field">
        <label>{label}</label>
        {/* then clear formProps -> {...input} */}
        {/* <input {...formProps.input} /> */}
        <input {...input} />
      </div>
    );
  }

  render() {
    console.log();
    return (
      <>
        <form className="ui form">
          <Field name="title" component={this.renderInput} label="Title" />
          <Field name="description"component={this.renderInput}label="Description" />
        </form>
      </>
    );
  }
}

export default reduxForm({ form: "streamCreate" })(StreamCreate);
