import UserContext from "../utils/UserContext";

export default Contact = () => (
  <div>
    <h1>Contact</h1>
    <h2>
      <UserContext.Consumer>
        {({ loggedInUser }) => <span>{loggedInUser}</span>}
      </UserContext.Consumer>
    </h2>
  </div>
);
