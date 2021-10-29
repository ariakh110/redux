import React, { Component } from "react";
import { Field, reduxForm } from "redux-form";
class StreamCreate extends Component {
  renderInput({ input, label, meta }) {
    console.log(meta);
    //can be {input} insted of formProps
    return (
      <div className="field">
        <label>{label}</label>
        {/* then clear formProps -> {...input} */}
        {/* <input {...formProps.input} /> */}
        <input {...input} />
        <div>
            {meta.error}
        </div>
      </div>
    );
  }
  onSubmit(formValues) {
    //   console.log(formValues);
  }
  render() {
    console.log();
    return (
      <>
        <form
          className="ui form"
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
