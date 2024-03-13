import React from "react";
import ReactDOM from "react-dom/client";

const jsxHeading = <h1 className="xyz">Hello from JSX</h1>;
console.log("jsxHeading =>", jsxHeading);

//Functional Component
//HeadingComponent1 and HeadingComponent2 are same
const Title = () => {
  return <h1>This is Title</h1>;
};

//component composition
const HeadingComponent2 = () => (
  <div className="container">
    {jsxHeading}
    <Title />
    <Title></Title>
    <h1 className="testing">This is HeadingComponent2</h1>
  </div>
);
console.log("HeadingComponent2 =>", HeadingComponent2());

const root = ReactDOM.createRoot(document.getElementById("root"));

//all the below synatx are correct
//the last one will display because root.render will update the content of the root element
root.render(jsxHeading);
root.render(<Title />);
root.render(HeadingComponent2());
