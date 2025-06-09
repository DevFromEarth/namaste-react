import React from "react";
import User from "./User";
import UserClass from "./UserClass";
// const About = () => {
//   return (
//     <div className="about">
//       <h1>About</h1>
//       <h1>This is namaste React Web Series</h1>
//       <User name="ut1" />
//       <UserClass name="ut2" />
//     </div>
//   );
// };

class About extends React.Component {
  constructor(props) {
    super(props);
    console.log("About Constructor");
  }

  componentDidMount() {
    console.log("About componentDidMount");
  }

  componentDidUpdate() {
    console.log("About componentDidUpdate");
  }

  componentWillUnmount() {
    console.log("About componentWillUnmount");
  }

  render() {
    console.log("About Render");
    return (
      <div className="about">
        <h1>About</h1>
        <h1>This is namaste React Web Series</h1>
        <User name="ut1" />
        <UserClass name="1st" />
        <UserClass name="2nd" />
        {console.log("End of About Render")}
      </div>
    );
  }
}

export default About;
