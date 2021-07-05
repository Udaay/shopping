import React from "react";
import "./signIn-and-signUp-pages.styles.scss";

import SignIn from "../../component/sign-in/sign-in.component";
import SignUp from "../../component/sign-up/sign-up.component";

const SignINAndSignUpPage = () => (
  <div className="sign-in-sign-up-page">
    <SignIn />
    <SignUp />
  </div>
);

export default SignINAndSignUpPage;
