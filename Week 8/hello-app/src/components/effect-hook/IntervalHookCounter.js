import React, { useState, useEffect } from 'react'

function IntervalHookCounter() {
    const [count, setCount] = useState(0)

    const tick = () => {
        setCount((prevValue) => prevValue + 1)
    }
    useEffect(() => {
        const interval = setInterval(tick, 1000)
        return () => {
            clearInterval(interval)
        }
    }, [])
    return (
        <div>
            <h2>{count}</h2>
        </div>
    )
}

export default IntervalHookCounter