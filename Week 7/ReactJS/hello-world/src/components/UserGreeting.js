// // conditional rendering
// // reference : https://youtu.be/7o5FPaVA9m0
import React, { Component } from 'react'

class UserGreeting extends Component {

    constructor(props) {
        super(props)

        this.state = {
            isLoggedIn: true
        }
    }

    render() {
        // // using if-else (1st)
        // if (this.state.isLoggedIn) {
        //     return (
        //         <div>Welocme Purvik</div>
        //     )
        // } else {
        //     return (
        //         <div>Welcome Guest</div>
        //     )
        // }


        // // using element variables(2nd)
        // let message;
        // if (this.state.isLoggedIn) {
        //     message = <div>Hello Purvik</div>
        // } else {
        //     message = <div>Hello Guest</div>
        // }
        // return <div>{message}</div>

        // // using ternary conditional operator (3rd)      //recommended
        // return (
        //     this.state.isLoggedIn ?
        //         <div>Welcome Purvik</div> :
        //         <div>Welcome Guest</div>
        // )


        // // using short circuit operator approach(4th)  //all or nothing  //recommended
        return this.state.isLoggedIn && <div>Welcome Purvik</div>


        // return (
        //     <div>
        //         <div>Welcome Purvik</div>
        //         <div>Welcome Guest</div>
        //     </div>
        // )
    }
}

export default UserGreeting