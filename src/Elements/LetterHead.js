import React from 'react';
import Radium from 'radium';

import Button from '../Components/Button';
import Container from '../Components/Container';
import Col from '../Components/Col';

const LetterHead = (props) => {

    let backgroundStyle = {
        textAlign: 'center',
        backgroundImage: `url(${props.img})`,
        backgroundPosition: 'center',
        backgroundSize: '100% 100%',
        backgroundRepeat: 'no-repeat',
        height:'30rem',
        padding: '7rem 2rem 2rem 2rem', 
    };

    let boxStyle ={
        margin: 'auto',
        padding: '2rem 1rem',
        paddingTop: '3rem',
        border: '3px solid whitesmoke',
        maxWidth: '750px'
    }

    let textStyle={
        color:'white',
        fontSize: '1.4rem',
        marginBottom: '2rem'
    }

    let buttonStyle={
        padding: '1.2rem',
        width:'14rem',
        margin: '0',
        marginBottom: '0.4rem',
        borderRadius:'none',
    }

    return (
        <Container style={backgroundStyle}>
          <Container type="container" style={boxStyle}>
                <div className="row">
                    <Col>
                        <p style={textStyle}>Üzletünkben több mint <b>10 000 lámpa</b></p>
                        <Button style={buttonStyle} text="Megnézem"/>
                    </Col>
                </div>
            </Container> 
        </Container>
    );
}

export default Radium(LetterHead);