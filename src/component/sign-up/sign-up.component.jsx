import React, { Component } from "react";
import "./sign-up.styles.scss";

import FormInput from "../form-input/form-input.component";
import CustomButton from "../custom -buttons/custom-button.component";

export default class SignUp extends Component {
  constructor(props) {
    super(props);

    this.state = {
      name: "",
      email: "",
      password: "",
      confirmPassword: "",
    };
  }

  handleSubmit = (event) => {
    event.preventDefault();
    this.setState({
      name: "",
      email: "",
      password: "",
      confirmPassword: "",
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
      <div className="sign-up">
        <h2> I don't have a account</h2>
        <span>Sign up with your email id and password</span>
        <form onSubmit={this.handleSubmit}>
          <FormInput
            value={this.state.name}
            name="name"
            type="name"
            label="Name"
            required
            handleChange={this.handleChange}
          />
          <FormInput
            value={this.state.email}
            name="email"
            type="email"
            label="Email"
            required
            handleChange={this.handleChange}
          />
          <FormInput
            value={this.state.password}
            name="password"
            type="password"
            label="Password"
            required
            handleChange={this.handleChange}
          />
          <FormInput
            value={this.state.confirmPassword}
            name="confirmPassword"
            type="password"
            label="Confirm Password"
            required
            handleChange={this.handleChange}
          />
          <CustomButton type="Submit">Sign Up</CustomButton>
        </form>
      </div>
    );
  }
}
