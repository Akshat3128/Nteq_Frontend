import React from "react";

const UserDetails = ({ email, location, role }) => {
    return (
        <div>
        <p><strong>Email:</strong> {email}</p>
        <p><strong>Location:</strong> {location}</p>
        <p><strong>Role:</strong> {role}</p>
        </div>
    );
};

export default UserDetails;
