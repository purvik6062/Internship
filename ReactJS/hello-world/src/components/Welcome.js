//example for class component
import React, { Component } from 'react';

class Welcome extends Component {
    render() {
        const { name, heroName } = this.props
        return (
            <h1>Welcome, {name} a.k.a {heroName}</h1>
        )
    }
}

export default Welcome;

// //NOTE: If we want to destructure 'props' then the syntax would be like as below:
// const {prop1, prop2} = this.props; (given in this code example above)

// //NOTE: If we want to destructure 'state' then the syntax would be like as below:
// const {state1, state2} = this.state;