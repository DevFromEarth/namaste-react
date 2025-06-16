import React from "react";
import UserClass from "./UserClass";
import UserContext from "../utils/UserContext";

class About extends React.Component {
  render() {
    return (
      <div className="about">
        <UserContext.Consumer>
          {({ loggedInUser }) => <h1>{loggedInUser}</h1>}
        </UserContext.Consumer>
        <h1>About</h1>
        <h1>This is namaste React Web Series</h1>
        <UserClass name="1st" />
      </div>
    );
  }
}

export default About;
