import React from "react";


//using JSX :
const Hello = () => {
    return (
        <div id='hello' className='dummyClass' >
            <h1>Hello Purvik !!</h1>
        </div >
    )
}

// // without using JSX
// const Hello = () => {
//     return React.createElement(
//         'div',
//         { id: 'hello', className: 'dummyClass' },
//         React.createElement('h1', null, 'Hello Purvik !!!'))
// }

export default Hello;