import React from "react";
import ReactDOM from "react-dom/client";

const jsxHeading = <h1 className="xyz">Hello from JSX</h1>;
console.log("jsxHeading =>", jsxHeading);

//Functional Component
//Title and HeadingComponent are diffrent ways of returning JSX.
// Functional Component return JSX => Babel Transpiles it to React.createElement => ReactElement/JS Object => HTMLEtement(render)
const Title = () => {
  return <h1>This is Title</h1>;
};

//component composition
const HeadingComponent = () => (
  <div className="container">
    {jsxHeading}
    <Title />
    <Title></Title>
    <h1 className="testing">This is HeadingComponent</h1>
  </div>
);
console.log("HeadingComponent =>", HeadingComponent());

const root = ReactDOM.createRoot(document.getElementById("root"));

//all the below syntax are correct
//the last one will display because root.render will update the content of the root element
root.render(jsxHeading);
root.render(<Title />);
root.render(HeadingComponent());
