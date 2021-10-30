import React, { Component } from "react";
import { Field, reduxForm } from "redux-form";
import { connect } from "react-redux";
import { createStream } from "../../actions";
class StreamCreate extends Component {
  renderError = ({ touched, error }) => {
    if (touched && error) {
      return (
        <div className="ui error message">
          <p>{error}</p>
        </div>
      );
    }
  };

  renderInput = ({ input, label, meta }) => {
    console.log(meta);
    //can be {input} insted of formProps
    const className = `field ${meta.touched && meta.error ? "error" : ""}`;
    return (
      <div className="field">
        <div className={className}>
          <label>{label}</label>
          {/* then clear formProps -> {...input} */}
          {/* <input {...formProps.input} /> */}
          <input {...input} />
        </div>
        <div>{this.renderError(meta)}</div>
      </div>
    );
  };

  onSubmit(formValues) {
    //   console.log(formValues);
  }
  render() {
    console.log();
    return (
      <>
        <form
          className="ui form error"
          onSubmit={this.props.handleSubmit(this.onSubmit)}
        >
          <Field name="title" component={this.renderInput} label="Title" />
          <Field
            name="description"
            component={this.renderInput}
            label="Description"
          />
          <button className="button ui primary">submit</button>
        </form>
      </>
    );
  }
}
const validate = (formValues) => {
  const errors = {};
  if (!formValues.title) {
    errors.title = "enter title";
  }
  if (!formValues.description) {
    errors.description = "enter description";
  }

  return errors;
};
export default reduxForm({ form: "streamCreate", validate })(StreamCreate);
