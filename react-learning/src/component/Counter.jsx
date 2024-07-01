
import  { useState } from "react";

function Counter() {
    const [count, setCount] = useState(0);
    
    const handleClick = () => {
        console.log('Button was clicked!');
        setCount(count + 1);
    };
    return (
        <div>
            <h1></h1>
            <button onClick={handleClick}>Increment</button>
            <p>You clicked {count} times</p>
        </div>
    )
}

export default Counter;