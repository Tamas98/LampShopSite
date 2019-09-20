import React from 'react';
import Radium from 'radium';
import Container from '../Components/Container';
import Col from '../Components/Col';
import Button from '../Components/Button';
import Partner from '../Components/Partner';


let buttonStyle={
    maxWidth: '70%',
    width: 'auto',
    marginTop: '2rem',
    backgroundColor: 'transparent',
    color: 'limegreen',
    ':hover':{
        textShadow: '1px 1px 20px lightyellow',
        maxWidth:'80%',
        marginTop: '1.5rem'
        
    }
}

const Partners = (props) => {

    let partners = [];
    let left= <p><i className="flaticon-back"></i></p>;
    let right= <p><i className="flaticon-next"></i></p>;

    let from = props.general.from;
    let to =props.general.to;

/*     let from=0;
    let to=from+4;
    
    if(props.general.isPushed){
        from = 1;
        to=from+4;
    } */

    for(let i = 0; i < props.partners.length ;i++){
        partners.push(
            <Partner link={props.partners[i].link} img={props.partners[i].logo}/>
        )
    }


    return(
        <Container type="container" style={{margin:'auto',paddingBottom:'2rem'}}>
            <div className="row">
                <Col style={{textAlign: 'right'}}>
                    <Button style={buttonStyle} click={props.handler.bind(this,"left")} text={left}/>
                </Col>
                {partners.slice(from,to)}
                <Col>
                    <Button style={buttonStyle} click={props.handler.bind(this,"right")} text={right}/>
                </Col>
            </div>
        </Container>
    );
} 

export default Radium(Partners);