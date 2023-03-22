// // List Rendering
import React from 'react'

function Person1({ person12 }) {
    return (
        <div>
            <h1>
                I am {person12.name}. I am {person12.age} years old. I know {person12.skill}.
            </h1>
        </div>
    )
}

export default Person1