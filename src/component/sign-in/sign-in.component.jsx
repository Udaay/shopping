import React, { Component } from "react";
import "./sign-in.styles.scss";

import FormInput from "../form-input/form-input.component";

export default class SignIn extends Component {
  constructor(props) {
    super(props);

    this.state = {
      name: "",
      email: "",
    };
  }

  handleSubmit = (event) => {
    event.preventDefault();
    this.setState({
      name: "",
      email: "",
    });
  };

  handleChange = (event) => {
    const { name, value } = event.target;
    this.setState({
      [name]: value,
    });
  };

  render() {
    return (
      <div className="sign-in">
        <h2>I already have an account</h2>
        <span> Sign in with email and password </span>
        <form onSubmit={this.handleSubmit}>
          <FormInput
            value={this.state.email}
            name="email"
            type="email"
            label="email"
            required
            handleChange={this.handleChange}
          />
          <FormInput
            value={this.state.email}
            name="password"
            type="password"
            label="password"
            required
            handleChange={this.handleChange}
          />
          <input type="Submit" name="Submit Form" />
        </form>
      </div>
    );
  }
}
