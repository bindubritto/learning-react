/* eslint-disable react/button-has-type */
import React, { Component } from 'react';

class Counter extends Component {
    constructor() {
        super();

        this.state = {
            count: 0,
        };
    }

    increment() {
        // this.setState({
        //     count: this.state.count + 1
        // }, () => {
        //     console.log(this.state.count)
        // })

        this.setState((prevState) => ({
            count: prevState.count + 1,
        }));

        // console.log(this.state.count)
    }

    incrementFive() {
        this.increment();
        this.increment();
        this.increment();
        this.increment();
        this.increment();
    }

    render() {
        const { count } = this.state;
        return (
            <div>
                <h1>Counter - {count}</h1>
                <button onClick={() => this.incrementFive()}>Increment</button>
            </div>
        );
    }
}

export default Counter;
