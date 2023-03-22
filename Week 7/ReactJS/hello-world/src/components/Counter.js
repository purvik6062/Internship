// NOTE: if we don't use setState then we can not be able to change the values/data in the browser, though the values/data get change.
import React, { Component } from 'react'

class Counter extends Component {

    constructor(props) {
        super(props)

        this.state = {
            count: 0
        }
    }

    increment() {
        // this.setState({
        //     count: this.state.count + 1
        // }, () => {
        //     console.log(`Callback value: ${this.state.count}`);
        // })

        this.setState((prevState) => ({
            count: prevState.count + 1
        }), () => {
            console.log(this.state.count)
        })

        // //console.log(this.state.count)      //just for an info
    }

    incrementFive() {
        this.increment();
        this.increment();
        this.increment();
        this.increment();
        this.increment();
    }

    reset() {
        this.setState({
            count: 0
        })
    }

    render() {
        return (
            <div>
                <div>Count - {this.state.count}</div>
                <button onClick={() => this.incrementFive()}>Increment</button>
                <button onClick={() => { this.reset() }}>Reset</button>
            </div>
        )
    }
}

export default Counter