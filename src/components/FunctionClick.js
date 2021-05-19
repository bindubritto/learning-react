/* eslint-disable react/button-has-type */
import React from 'react';

function FunctionClick() {
    function clickHandler() {
        console.log('Function Button Clicked');
    }
    return (
        <div>
            <button onClick={clickHandler}>Functional Click Me</button>
        </div>
    );
}

export default FunctionClick;
