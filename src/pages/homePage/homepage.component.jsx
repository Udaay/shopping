import React from "react";

import Directory from "../../component/directory/directory.component";
// import "./hompage.styles.scss";
import HomePageContainer from "./homepage.styled.component";

const Homepage = () => {
  return (
    <HomePageContainer>
      <Directory />
    </HomePageContainer>
  );
};

export default Homepage;
