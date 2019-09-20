import React from 'react';
import Radium from 'radium';
import Container from '../Components/Container';
import Button from '../Components/Button';
import Col from '../Components/Col';

const BigLamp = (props) => {

    let buttonText = "Részletek";

    let colStyle={
        paddingTop: "4rem",
        marginRight:'0',
    }

    let moreStyle={
        opacity: '0',
        transition: 'all 1s ease-in-out'
    }

    let add = null;

    if(props.more){
        add = "adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam"+
             "aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit"+
              "laboriosam, nisi ut aliquid ex ea commodi consequatur?";

        colStyle.paddingTop = '0';
        buttonText="Kevesebb";
        moreStyle.opacity= '100';
    
    }

    return(
        <Container type="container" style={{margin:'0 auto 3rem auto'}}>
            <div className="row">
                <Col type="col-12 col-md-6" styyle={{margin:"0.5rem"}}>
                    <img src={props.img}/>
                </Col>
                <Col type="col-12 col-md-6" style={colStyle}>
                    <p style={{color:'midnightblue',margin:'0',textTransform:'uppercase',fontWeight:'bold',fontSize:'1.3rem'}}>Esztétikus</p>
                    <p style={{color:'midnightblue',fontSize:'1.6rem',marginBottom:'2rem'}}>modern design</p>
                    <p style={{color:'midnightblue',fontSize:'1rem',marginBottom:'2rem'}}>
                    Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium
                    totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta
                    sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia
                    consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui
                    dolorem ipsum quia dolor sit amet, consectetur,
                    <span style={moreStyle}>{add}</span> 
                    </p>
                    <Button click={props.handler} style={{width:'55%',borderRadius:'5px'}}text={buttonText}/>
                </Col>
            </div>
        </Container>
    );
}

export default Radium(BigLamp);