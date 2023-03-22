// example for function component
// example of props
import React from 'react';

// function Greet() {
//     return <h1>Hello Purvik</h1>
// }


// // old (original before destructuring)
// const Greet = (props) => {
//     // const { name, heroName } = props
//     return (
//         <div>
//             <h1>Hello, {props.name} a.k.a {props.heroName}</h1>
//         </div>
//     )
// }


// // ----------------Destructuring of props (in function component) {starts}-------------------- // //

// const Greet = ({ name, heroName }) => {
//     // console.log(props);
//     return (
//         <div>
//             <h1>Hello, {name} a.k.a {heroName}</h1>
//             {/* {props.children} */}
//         </div>
//     )
// }

// // ----------------above and below code works same-------------------- // //

const Greet = (props) => {
    const { name, heroName } = props
    return (
        <div>
            <h1>Hello, {name} a.k.a {heroName}</h1>
            {/* {props.children} */}
        </div>
    )
}

// // ----------------Destructuring of props (in function component) {ends}-------------------- // //

export default Greet;