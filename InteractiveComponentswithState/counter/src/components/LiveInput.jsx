import React, { useState } from "react";

const LiveInput = () => {
    const [inputText, setInputText] = useState("");

    return (
        <div>
        <h2>Live Input</h2>
        <input
            type="text"
            placeholder="Type something....."
            value={inputText}
            onChange={(e) => setInputText(e.target.value)}
        />
        <p>Live: {inputText}</p>
        </div>
    );
};

export default LiveInput;
