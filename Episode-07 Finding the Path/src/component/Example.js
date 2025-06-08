import { useState, useEffect } from "react";

//Example of useEffect Variations
const Demo = () => {
  const [count, setCount] = useState(0);

  // 1️⃣ Runs after every render
  useEffect(() => {
    console.log("✅ useEffect: Every render");
    return () => {
      console.log("🧹 Cleanup: in no Array");
    };
  });

  // 2️⃣ Runs only once (on mount), cleanup runs only on unmount
  useEffect(() => {
    console.log("📦 useEffect: Component Mounted");

    return () => {
      console.log("🧹 Cleanup: Component Unmounted");
    };
  }, []);

  // 3️⃣ Runs whenever `count` changes
  useEffect(() => {
    console.log("🎯 useEffect: Count changed", count);

    return () => {
      console.log("🧹 Cleanup: previous count was", count);
    };
  }, [count]);

  return (
    <div>
      <p>Count: {count}</p>
      <button onClick={() => setCount(count + 1)}>Increment</button>
    </div>
  );
};

const Example = () => {
  const [show, setShow] = useState(true);

  return (
    <div>
      <button onClick={() => setShow(!show)}>
        {show ? "Unmount Component" : "Mount Component"}
      </button>
      {show && <Demo />}
    </div>
  );
};

export default Example;
