/* eslint-disable react/button-has-type */
import React from 'react';

function ChildComponent(props) {
    return (
        <div>
            {/* <button onClick={props.greetHandler} >Greet Parent</button> */}
            {/* This way is useful to pass data from parent to child. Now we'll see 
            pass data from child to parent.  */}

            <button onClick={() => props.greetHandler('Child')}>Greet Parent from child</button>
            {/* Here we just use arrow function to do this. */}
        </div>
    );
}

export default ChildComponent;
