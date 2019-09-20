import React from 'react';
import Radium from 'radium';
import Container from '../Components/Container';
import Col from '../Components/Col';
import Button from '../Components/Button';

const FooterMenu = () => (

        <Container style={{backgroundColor: 'rgb(44, 63, 112)',padding:'2rem',marginTop: '4rem'}}>
            <Container type="container" style={{margin: 'auto'}}> 
            <div class = "row" id="footerMenu" >
                        <Col>
                            <p>Termékek</p>
                            <button>álló lámpák</button><br/>
                            <button>fali lámpák</button><br/>
                            <button>asztali lámpák</button><br/>
                            <button>hordozható lámpák</button><br/>
                        </Col>
                        <Col>
                            <p>Népszerű</p>
                            <button>álló lámpák</button><br/>
                            <button>fali lámpák</button><br/>
                            <button>asztali lámpák</button><br/>
                            <button>hordozható lámpák</button><br/>
                        </Col>
                        <Col>
                            <p>Info</p>
                            <button>rendelés</button><br/>
                            <button>kiszállítás</button><br/>
                            <button>előfizetés</button><br/>
                            <button>cégeknek</button><br/>
                        </Col>
                        <Col>
                            <p>Kapcsolat</p>
                            <p>0650 555 555</p>
                            <p>peldaemail@email.com</p>
                        </Col>
            </div>
            </Container>
        </Container>
    );


export default Radium(FooterMenu)