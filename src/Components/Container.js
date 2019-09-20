import React from 'react';
import Radium from 'radium';

const Container = (props) =>{
    
    let style = {
        margin: '0',
        padding: '0',
        ...props.style
    }

    return(
        <div style={style}className={props.type || "container-fluid"}>
            {props.children}
        </div>
    );
}

export default Radium(Container)