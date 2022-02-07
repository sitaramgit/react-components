import React from "react";

const JSXcomp = () => {
    return React.createElement(
        'div',
        {id:'jsxdiv', className:'jsx'},
        React.createElement('h1', null, 'jsx component')
        )
}

export default JSXcomp