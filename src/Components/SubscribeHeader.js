import React from 'react'
import Radium from 'radium'
import Col from './Col'

let style={
    textAlign: 'center',
    color: 'midnightblue',
    fontSize:'1.25rem',
    letterSpacing: '0.15rem',
    bottom:'-30px'
}

const SubscribeHeadder = (props) => (
    <div className="row" style={{textAlign:'center',paddingTop:'2rem'}}>
        <Col type="col-md-12">
            <img className="image-responsive" src={props.img} style={{minWidth:'22.5%',maxWidth: '100%',width:'auto'}}/>
                
                
            <Col type="carousel-caption" style={style}>
                <p id="hirlevel"><b>Hírlevél</b></p>
            </Col>
            <Col type="carousel-caption" style={style}>
                <p>
                    <b>Iratkozz fel, hogy minél előbb értesülj<br/>
                    akcióinkról</b>
                </p>
            </Col>
        </Col>
    </div>
)

export default Radium(SubscribeHeadder);