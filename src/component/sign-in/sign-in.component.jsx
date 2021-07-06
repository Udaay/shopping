import React, { Component } from "react";
import "./sign-in.styles.scss";

import FormInput from "../form-input/form-input.component";
import CustomButton from "../custom -buttons/custom-button.component";
import { signInWithGoogle, auth } from "../../firebase/firebase.utils";

export default class SignIn extends Component {
  constructor(props) {
    super(props);

    this.state = {
      email: "",
      password: "",
    };
  }

  handleSubmit = async (event) => {
    event.preventDefault();
    const { email, password } = this.state;
    try {
      await auth.signInWithEmailAndPassword(email, password);
      this.setState({
        email: "",
        password: "",
      });
    } catch (error) {
      console.log("Error while Sign in Id and pass", error.message);
    }
  };

  handleChange = (event) => {
    const { name, value } = event.target;
    this.setState({
      [name]: value,
    });
  };

  render() {
    const { email, password } = this.state;
    return (
      <div className="sign-in">
        <h2 className="title">I already have an account</h2>
        <span> Sign in with email and password </span>
        <form onSubmit={this.handleSubmit}>
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
          <div className="buttons">
            <CustomButton type="submit">Sign In</CustomButton>
            <CustomButton onClick={signInWithGoogle} isGoogleSignIn={true}>
              Sign In with Google
            </CustomButton>
          </div>
        </form>
      </div>
    );
  }
}
