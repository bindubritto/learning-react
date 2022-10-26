import React, { Component } from 'react';
import Button from './Button';

class Clock extends Component {
    state = { date: new Date(), locale: 'bn-BD' };

    handleClick = (locale) => {
        this.setState({
            locale,
        });
    };

    render() {
        const { date, locale } = this.state;
        return (
            <div>
                <h1>{date.toLocaleTimeString(locale)}</h1>
                <Button change={this.handleClick} locale="en-US" />
            </div>
        );
    }
}

export default Clock;
