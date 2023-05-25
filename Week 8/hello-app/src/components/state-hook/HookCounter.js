import React, { useState } from 'react'

function HookCounter() {

    const [count, setCount] = useState(0)

    return (
        <div>
            {/* <button onClick={() => setCount(count + 1)}>Count {count}</button> */}
            <button onClick={() => setCount(prevValue => prevValue + 1)}>Count {count}</button>
        </div>
    )
}

export default HookCounter