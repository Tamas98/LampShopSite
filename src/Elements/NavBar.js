import React from 'react';
import Radium from 'radium';
import Container from '../Components/Container';
import Col from '../Components/Col';

const NavBar = (props) => {

    let buttons = [];

    let buttonStyle = {
        backgroundColor: 'transparent',
        fontWeight: 'bold',
        border: 'none',
        color:'white',
        margin: '1.3rem 0',
        fontSize: '1.1rem',
        padding: '0',
        transition: 'all 0.5s ease 0s',
        ':hover': {
            fontSize:'1.2rem',
            color: 'lightyellow',
            textShadow: '0 0 10px white'
        }
    };

    let imageStyle= {
        margin: '1.1rem 1.1rem 0.5rem 1.5rem',
        maxWidth: '10rem',
        cursor: 'pointer',
    }

    for(let text in props.buttons){
        buttons.push(<Col type="col-sm-1 offset-1">
                        <button style={buttonStyle}>{props.buttons[text]}</button>
                    </Col>)
    }

    return(
        <Container style={{backgroundColor:'midnightblue'}}>
            <div className="row">
                <Col type="col">
                    <img style={imageStyle} src={props.img}/>
                </Col>
                <Col/>
                {buttons}
            </div>
        </Container>
    );
}

export default Radium(NavBar);