import React from 'react'
import Radium from 'radium'
import Container from '../Components/Container'
import Col from '../Components/Col'
import Button from '../Components/Button'
import SubscribeHeader from "../Components/SubscribeHeader"


let buttonStyle={
    maxWidth: '80%',
    width: 'auto',
    minWidth: '25%',
    marginBottom: '2rem',
    borderRadius: '10px',
    padding: '1rem 2rem'
}

let iconStyle={
    position: 'relative',
    backgroundColor: 'lightgray',
    padding: '0 0.2rem',
    borderRadius: '50%',
    color: 'white',
    fontSize: '1.25rem'
}

const Subscribe = (props) => (

        <Container type="container" style={{border: '7px solid lightgray',margin: 'auto',marginTop:'3%'}}>
            
            <SubscribeHeader img={props.img}/>

            <div className="row" style={{textAlign: 'center'}} >
                <Col>
                    <form autoComplete="off">
                        <i id="user" style={iconStyle} className="flaticon-user"></i><input name="name" type="text" placeholder="Név"/>
                        <i id="mail" style={{position:'relative',
                        backgroundColor: 'lightgray',
                        padding: '0 0.2rem',
                        borderRadius: '50%',
                        color:'white',fontSize:'1.25rem'}}
                        className="flaticon-mail"></i><input style={{marginLeft: '0'}} type="text" placeholder="Email"/>
                    </form>
                    <Button style={buttonStyle} text="Feliratkozás"/>
                </Col>
            </div>
            
        </Container>
    );



export default Radium(Subscribe)