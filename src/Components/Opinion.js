import React from 'react';
import Radium from 'radium';
import Col from './Col';

const Opinion = (props) => (
    <div className="row" style={{padding: '2rem 2rem 0 2rem',textAlign:'left'}}>
       
        <Col type="col-sm-2">
            <img src={props.img}/>
        </Col>
        
        <Col type="col-sm-10">     
            <p style={{color:'midnightblue',marginTop:'1rem',fontSize:'1.1rem'}}>
                Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, 
                totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae 
                dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, 
                sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt.
            </p>
            <p style={{color:'midnightblue',fontWeight:'bold',fontSize:'1rem'}}>Példa Kata</p>   
        </Col>

        <div style={{borderBottom: '2px solid lightgray',width:'97%',margin: '2rem 1.5%'}}></div>
    
    </div>
)

export default Radium(Opinion)