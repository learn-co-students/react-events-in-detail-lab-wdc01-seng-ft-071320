// Code CoordinatesButton Component Here

import React, {Component} from 'react';

export default class CoordinatesButton extends Component{
    handleClick = (event) => {
        let mouseCoordinates = [event.clientX, event.clientY]
        this.props.onReceiveCoordinates(mouseCoordinates)
    }
    
    render(){
        return(<button onClick={this.handleClick}></button>)
    }
}

