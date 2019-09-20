import React from 'react'
import Radium from 'radium'
import Col from './Col'

//href="https://i.redd.it/l10muzggrg601.jpg"
const Partner = (props) => (
    <Col type="col-sm-2 partnerek" style={{margin:'0.5rem'}}>
        <a href={props.link}>
            <img 
            style={{transition: 'all 0.75s ease 0s',
            ':hover':{transform: 'scale(1.05,1.05)',
            boxShadow: '0 0 15px yellow'}}} 
            src={props.img}/>
        </a>
    </Col>
)

export default Radium(Partner)