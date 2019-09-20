import React from 'react';
import Radium from 'radium';
import Col from './Col';

const Rate = (props) => (
    <div className="row">
        
        <div className="row" style={{margin:'2rem',marginBottom: '0'}}>
            <Col type="col-sm-4">
                <img src={props.img}/>
            </Col>
            <Col type="col-sm-2" style={{fontSize:"3rem",padding: '1.5rem'}}>
                {props.stars}
            </Col>
        </div>

        <div className="row" style={{margin:'0 2rem'}}>
            <Col style={{textAlign: 'left',padding: '1rem 1rem 0 1rem',fontSize:'1.3rem',color:'midnightblue'}}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut 
                et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi
                ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit 
                esse cillum dolore eu fugiat nulla pariatur.
            </Col>
        </div>

        <div style={{borderBottom: '2px solid lightgray',width:'90%',margin: '2rem 4%'}}></div>
    
    </div>
)

export default Radium(Rate);