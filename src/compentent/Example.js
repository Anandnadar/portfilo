import React, { useState } from 'react';



function Example() {

    const [count, setCount] = useState(0);
    return (
        <div>
            <p>{count}</p>
            <button onClick ={() => setCount(count + 1)}> Click</button>
        </div>
    );
}

export default Example;