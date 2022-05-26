// your Bomb code here!

//decreate in time
//explode at 0


import React, { Component } from 'react';

class Bomb extends Component {
    constructor(props){
        super()
        this.state = { //setting the initial state of the bomb app
            secondsLeft: props.initialCount,
        }
    }
    
    
    render() {

        const message = this.state.secondsLeft === 0 ? 'Boom!' : `${this.state.secondsLeft} seconds left before I go boom!`;
        return <div>{message}</div> 
    }
}

export default Bomb
