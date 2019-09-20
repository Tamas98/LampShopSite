import React from 'react'
import Radium from 'radium'
import Container from '../Components/Container'
import Button from '../Components/Button'
import Col from '../Components/Col'



const Gyik = (props) => {
    let questions = [];

    let answStyle={
        backgroundColor: 'rgb(214,221,240)',
        padding:'3% 0 3% 3%',
        fontSize:'0.9rem',
        color:'midnightblue',
        margin:'0',
        transition: 'all 1s ease 1s',
    }

    let buttonStyle={
        width:'100%',
        margin: '0',
        textAlign: 'left',
        padding: '2%',
        fontSize:'0.9rem',
        fontWeight: 'bold',
        color:'midnightblue',
        marginTop:'0.4rem',
        marginBottom: '0',
        border:'none',
        backgroundColor: 'white',
        borderRadius: 'none',
        textTransform: 'none',
        boxShadow: '2px 2px 20px lightgray'
    }

    for(let i = 0; i < 3; i++){

        let upOrDown = (<p style={{padding: '0',margin: '0'}}><i className="flaticon-chevron"></i>Mennyibe kerülnek a lámpák?</p>);

        if(props.opac[i] !== 100){
            upOrDown = (<p style={{padding: '0',margin: '0'}}><i className="flaticon-arrow"></i>Mennyibe kerülnek a lámpák?</p>);
        }

        questions.push(<div className="row">
                <Col>
                    <Button id={i} click={props.handler.bind(this,i)} style={buttonStyle} text={upOrDown}/>
                </Col>
            <div className="row">
                {props.opac[i] === 100 ? <Col>
                    <p id={i} style={{...answStyle,opacity: props.opac[i]}}>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt
                        ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                        ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in 
                        reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
                    </p>
                </Col> : null}
            </div>
        </div>)
    }
    
    return (
        <Container type='container' style={{margin: 'auto',paddingBottom: '5%'}}>
            {questions}
        </Container>
    );
}

export default Radium(Gyik)