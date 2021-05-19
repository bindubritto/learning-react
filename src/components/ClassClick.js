/* eslint-disable react/button-has-type */
import React, { Component } from 'react';

class ClassClick extends Component {
    // eslint-disable-next-line class-methods-use-this
    clickHandler() {
        console.log('Class button clicked');
    }

    render() {
        return (
            <div>
                <button onClick={this.clickHandler}>Class Click me</button>
            </div>
        );
    }
}

export default ClassClick;
