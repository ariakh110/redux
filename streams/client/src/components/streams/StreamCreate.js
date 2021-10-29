import React, { Component } from "react";
import { Field, reduxForm } from "redux-form";
class StreamCreate extends Component {
  renderInput(formProps) {//can be {input} insted of formProps 
    return <input {...formProps.input} />;// then clear formProps -> {...input}
  }

  render() {
    console.log();
    return (
      <>
        <form>
          <Field name="title" component={this.renderInput} />
          <Field name="description" component={this.renderInput} />
        </form>
      </>
    );
  }
}

export default reduxForm({ form: "streamCreate" })(StreamCreate);
