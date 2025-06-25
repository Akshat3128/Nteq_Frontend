import React from "react";
import UserDetails from "./UserDetails";

const UserCard = ({ user }) => {
    return (
        <div style={styles.card}>
        <h2>{user.name}</h2>
        <UserDetails email={user.email} location={user.location} role={user.role} />
        </div>
    );
    };

    const styles = {
    card: {
        border: "1px solid #ccc",
        borderRadius: "8px",
        padding: "1rem",
        backgroundColor: "#f9f9f9",
        maxWidth: "400px"
    }
};

export default UserCard;
