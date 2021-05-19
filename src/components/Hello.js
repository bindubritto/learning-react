import React from 'react';

const Hello = () =>
    // JSX version
    // return (
    //     <div id= >
    //         <h1>Hello Sabbir Ahemd</h1>
    //     </div>
    // )

    React.createElement(
        'div',
        { id: 'hello', className: 'dummyClass' },
        React.createElement('h1', null, 'Hello Viswas')
    );
export default Hello;
