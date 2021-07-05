import React, { Component } from "react";
import "./sign-in.styles.scss";

import FormInput from "../form-input/form-input.component";
import CustomButton from "../custom -buttons/custom-button.component";
import { signInWithGoogle } from "../../firebase/firebase.utils";

export default class SignIn extends Component {
  constructor(props) {
    super(props);

    this.state = {
      name: "",
      email: "",
      password: "",
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
          <CustomButton type="Submit">Sign In</CustomButton>
          <CustomButton onClick={signInWithGoogle} isGoogleSignIn={true}>
            Sign In with Google
          </CustomButton>
        </form>
      </div>
    );
  }
}