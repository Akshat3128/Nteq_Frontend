import React, { useState } from "react";

const VisibilityToggle = () => {
    const [isVisible, setIsVisible] = useState(true);

    return (
        <div>
        <h2>Visibility Toggle</h2>
        <button onClick={() => setIsVisible(!isVisible)}>
            {isVisible ? "Hide" : "Show"} Paragraph
        </button>
        {isVisible && <p>This paragraph is visible. Toggle me!</p>}
        </div>
    );
};

export default VisibilityToggle;
