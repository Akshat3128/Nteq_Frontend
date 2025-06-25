import React from "react";
import Counter from "./components/Counter";
import LiveInput from "./components/LiveInput";
import VisibilityToggle from "./components/VisibilityToggle";

const App = () => {
  return (
    <div style={{ padding: "2rem" }}>
      <h1>React State & Event Handling</h1>
      <Counter />
      <hr />
      <LiveInput />
      <hr />
      <VisibilityToggle />
    </div>
  );
};

export default App;
