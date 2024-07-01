
import { useState } from "react";

function CounterPojok() {
    const [count, setCount] = useState(0);
    

    return (
        <div>
            <h1>{count}</h1>
            <button onClick={() => {
                console.log('Button was clicked!');
                setCount(count + 1);
            }}>
                Increment
            </button>
           
        </div>
    )
}

export default CounterPojok;