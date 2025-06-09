import { useState } from "react";

const User = ({ name }) => {
  const [count, setCount] = useState(0);
  return (
    <div className="user-card">
      <h2>Functional Component</h2>
      <h3>{name}</h3>
      <h4>{count}</h4>
    </div>
  );
};

export default User;
