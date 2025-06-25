import React from "react";
import UserCard from "./components/UserCard";

const App = () => {
  const user = {
    name: "Akshat Saxena",
    email: "akshat@gmail.com",
    location: "Raipur, India",
    role: "Frontend Developer"
  };

  return (
    <div style={{ padding: "2rem" }}>
      <h1>User Profile</h1>
      <UserCard user={user} />
    </div>
  );
};

export default App;
