import React from "react";

class UserClass extends React.Component {
  constructor(xyz) {
    super(xyz);
    console.log(this.props.name + " UserClass Constructor");
    this.state = {
      count: 0,
      userInfo: null,
    };
  }

  async componentDidMount() {
    console.log(this.props.name + " UserClass componentDidMount");
    const data = await fetch("https://api.github.com/users/DevFromEarth");
    const json = await data.json();
    this.setState({
      userInfo: json,
    });
    console.log(json);
  }

  componentDidUpdate() {
    console.log(this.props.name + " Userclass componentDidUpdate");
  }

  componentWillUnmount() {
    console.log(this.props.name + " Userclass componentWillUnmount");
  }

  render() {
    console.log(this.props.name + " UserClass Render");
    return (
      <div className="user-card">
        <h2>Class Based Component</h2>
        <h3>{this.state.userInfo?.name || this.props.name}</h3>
        <h4>{this.state.count}</h4>
        <button onClick={() => this.setState({ count: this.state.count + 1 })}>
          Increase
        </button>
        {console.log(this.props.name + " End of UserClass Render")}
      </div>
    );
  }
}

export default UserClass;
