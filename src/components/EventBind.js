/* eslint-disable react/button-has-type */
import React, { Component } from 'react';

class EventBind extends Component {
    constructor(props) {
        super(props);

        this.state = {
            message: 'Hello',
        };

        // this.eventHandler = this.eventHandler.bind(this);
    }

    // eventHandler() {
    //     this.setState({
    //         message: 'GoodBye'
    //     })
    //     console.log(this)
    // }

    // Class property approach. 4th one
    eventHandler = () => {
        this.setState({
            message: 'Good Bye',
        });
        console.log(this);
    };

    render() {
        const { message } = this.state;
        return (
            <div>
                <p>{message}</p>
                {/* <button onClick={this.eventHandler.bind(this)} >Event Handler Click</button> */}
                {/* <button onClick={() => this.eventHandler()} >Event Handler Click</button> */}
                <button onClick={this.eventHandler}>Event Handler Click</button>
            </div>
        );
    }
}

export default EventBind;
