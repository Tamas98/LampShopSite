import React from 'react';
import Radium from 'radium';
import Container from '../Components/Container';


const Title = (props) => {

    let style={
        textAlign: 'center',
        color:'midnightblue',
        fontSize:'2rem',
        fontWeight: 'bold',
        margin:'3%',
        ...props.style
    }

    return (
        <Container type="jumbotron-fluid" style={style}>
            {props.text}
        </Container>
    );
}

export default Radium(Title)