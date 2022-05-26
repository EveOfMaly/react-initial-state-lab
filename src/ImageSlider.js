// your ImageSlider code here!

import React, { Component } from 'react';

class ImageSlider extends Component {
    constructor(){ //initial value of the state set in this constructor
        super(); //super allows us to inherit form the paretn class React allowing us access to methods like this and variables from parents class
        this.state = {
            currentSlideIndex: 0
        }

    }
    render() {
        return <h1>I am on slide {this.state.currentSlideIndex}</h1>
    }


}

export default ImageSlider;
