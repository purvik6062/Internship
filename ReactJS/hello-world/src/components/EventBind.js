// // Reference : https://youtu.be/kVWpBtRjkCk
import React, { Component } from 'react'

class EventBind extends Component {

    constructor(props) {
        super(props)

        this.state = {
            message: 'Hello'
        }

        // this.clickHandler = this.clickHandler.bind(this);        // 3rd 
    }

    // //1st, 2nd, 3rd 
    // clickHandler() {
    //     this.setState({
    //         message: 'GoodBye !'
    //     })
    //     console.log(this)
    // }

    // //4th
    clickHandler = () => {
        this.setState({
            message: 'GoodBye !'
        })
        console.log(this)
    }

    render() {
        return (
            <div>
                <div><h1>{this.state.message}</h1></div>
                {/* 1st approach */}
                {/* <button onClick={this.clickHandler.bind(this)}>Click</button> */}
                {/* 2nd approach */}
                {/* <button onClick={() => this.clickHandler()}>Click</button> */}
                {/* 3rd approach */}
                {/* <button onClick={this.clickHandler}>Click</button> */}
                {/* 4th approach */}
                <button onClick={this.clickHandler}>Click</button>
            </div>
        )
    }
}

export default EventBind