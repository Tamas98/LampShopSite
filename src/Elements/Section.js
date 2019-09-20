import React from 'react';
import Radium from 'radium';
import Container from '../Components/Container';
import Button from '../Components/Button';
import Col from '../Components/Col';
import Opinion from '../Components/Opinion';
import Rate from '../Components/Rate';

let backgroundStyle = {
    backgroundColor: "white",
    textAlign: 'center'
}

let buttonStyle={
    border:'none',
    backgroundColor:'transparent',
    color:'limegreen',
    fontSize:'2rem',
    maxWidth: '35%',
    width: 'auto',
    fontWeight: 'none',
    ':hover': {
        fontSize: '2.2rem',
        color: 'lime',
        textShadow: '1px 1px 2px black'
    }
}

let yellowStars = Math.floor(Math.random()*5+1);

const randomizeStars = () => {
    let result = [];
    
    for(let i = 0; i < yellowStars;i++){
        result.push(
            '\u2605'
        )
    }

    for(let i = yellowStars; i < 5;i++){
        result.push(
            '\u2606'
        )
    }

    return result;
}

const Rates = (props) =>{
    
    let rates = []

    let buttonName="Még Több";

    if(props.num > 2){
        buttonName="Kevesebb";
    }

    for(let i = 0; i < props.num; i++){
        rates.push(<Rate img={props.img} stars={randomizeStars()}/>)
    }

    return(
        <div style={backgroundStyle}>
            {rates}
            <Button click={props.handler} style={buttonStyle} text={buttonName}/>
        </div>
    );
}

const Opinions = (props) =>{
    
    let opinions = [];

    let buttonName="Még Több";

    if(props.num > 2){
        buttonName="Kevesebb";
    }

    for(let i = 0;i < props.num; i++){
        opinions.push(<Opinion img={props.img}/>);
    }

    return(<div style={backgroundStyle}>
                {opinions}
                <Button click={props.handler} style={buttonStyle} text={buttonName}/>
            </div>);
}


const Section = (props) => {

    let buttonColor1 = 'white';
    let buttonColor2 = 'lightsteelblue';

    if(props.choosen){
        buttonColor2="white";
        buttonColor1= "lightsteelblue";
    }

    let buttonStyle={
        fontSize:'0.8rem',
        maxWidth:'20rem',
        width:'95%',
        color: 'midnightblue',
        fontWeight: 'bold',
        padding: '1rem 2rem',
        borderRadius:'10px 10px 0 0',
        backgroundColor: 'whitesmoke',
        border:'none',
        marginBottom: '0',
        margin:'0',
        ':hover':{
            backgroundColor: 'yellow',
            letterSpacing: '0.1rem'
        } 
    }


    return(
    <Container type="container" style={{margin: 'auto' }}>
        <div className="row">
            <Col type="col-2">
                <Button click={props.handler.bind(this,"velemenyek")} style={{...buttonStyle,marginRight:'0.5rem',backgroundColor:buttonColor1}} text="Vélemények"/>
            </Col>
            <Col type="col-2">
                <Button click={props.handler} style={{...buttonStyle,backgroundColor:buttonColor2,}} text="Értékelések"/>
            </Col>
        </div>
        
        <Col>
            {props.choosen 
            ? <Rates handler={props.megtobb} num={props.num} img={props.img}/> 
            : <Opinions handler={props.megtobb} num={props.num} img={props.img}/>}
        </Col>
        
    </Container>
    );
}

export default Radium(Section);