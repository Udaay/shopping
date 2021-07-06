import React, { Component } from "react";
import "./sign-up.styles.scss";

import FormInput from "../form-input/form-input.component";
import CustomButton from "../custom -buttons/custom-button.component";
import { auth, createUserProfileDocument } from "../../firebase/firebase.utils";

export default class SignUp extends Component {
  constructor(props) {
    super(props);

    this.state = {
      displayName: "",
      email: "",
      password: "",
      confirmPassword: "",
    };
  }

  handleSubmit = async (event) => {
    event.preventDefault();

    const { displayName, email, password, confirmPassword } = this.state;
    if (password !== confirmPassword) {
      alert("Password don't match");
      return;
    }

    try {
      const { user } = await auth.createUserWithEmailAndPassword(
        email,
        password
      );
      await createUserProfileDocument(user, { displayName });
      this.setState({
        displayName: "",
        email: "",
        password: "",
        confirmPassword: "",
      });
    } catch (error) {
      console.log("error while Signing Up", error.message);
    }
  };

  handleChange = (event) => {
    const { name, value } = event.target;
    this.setState({
      [name]: value,
    });
  };

  render() {
    const { displayName, email, password, confirmPassword } = this.state;
    return (
      <div className="sign-up">
        <h2 className="title"> I don't have a account</h2>
        <span>Sign up with your email id and password</span>
        <form onSubmit={this.handleSubmit}>
          <FormInput
            value={displayName}
            name="displayName"
            type="name"
            label="Name"
            required
            handleChange={this.handleChange}
          />
          <FormInput
            value={email}
            name="email"
            type="email"
            label="Email"
            required
            handleChange={this.handleChange}
          />
          <FormInput
            value={password}
            name="password"
            type="password"
            label="Password"
            required
            handleChange={this.handleChange}
          />
          <FormInput
            value={confirmPassword}
            name="confirmPassword"
            type="password"
            label="Confirm Password"
            required
            handleChange={this.handleChange}
          />
          <CustomButton type="submit">Sign Up</CustomButton>
        </form>
      </div>
    );
  }
}
