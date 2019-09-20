import React from 'react';
import Radium from 'radium';

const Col = (props) => {

    let type = props.type || "col";

    return <div className={type} style={props.style}>{props.children}</div>
}

export default Radium(Col)