import React, { useState } from "react";

const Counter = () => {
    const [count, setCount] = useState(0);

        return (
            <div>
                <h2>Counter: {count}</h2>
                <button onClick={() => setCount(count + 1)}>Increment</button>
                <button onClick={() => setCount(count - 1)} disabled={count <= 0}>Decrement</button>
            </div>
        );
};

export default Counter;
