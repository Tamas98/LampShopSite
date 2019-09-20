import React from 'react';
import Radium from 'radium';

const Button = (props) => {

    let style={
        backgroundColor: 'rgb(43,202,148)',
        color: 'white',
        textTransform: 'uppercase',
        border: 'none',
        padding: '0.5rem 0.25rem',
        margin:'0.2rem',
        marginBottom:'0.4rem',
        fontSize: '0.9rem',
        width: '94%',
        borderRadius: '10px',
        fontWeight: 'bold',
        transition: 'all 0.5s ease 0s',
        cursor:'pointer',
        ':hover':{
            backgroundColor: 'rgb(10,240,150)',
            boxShadow: '0 0 2rem lightsteelblue',
            fontSize:'1rem'
        },
        ...props.style
    }

    return <button id={props.id} onClick={props.click} style={style}>{props.text}</button>
}

export default Radium(Button);