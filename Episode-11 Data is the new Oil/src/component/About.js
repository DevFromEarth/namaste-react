import React from "react";
import UserClass from "./UserClass";

class About extends React.Component {
  render() {
    return (
      <div className="about">
        <h1>About</h1>
        <h1>This is namaste React Web Series</h1>
        <UserClass name="1st" />
      </div>
    );
  }
}

export default About;
