import React from 'react';
import Radium from 'radium';
import Col from './Col';
import Button from './Button';

let nameStyle= {
    fontSize:'1.5rem',
    fontWeight: 'bold',
    color:'midnightblue'
};
let saleStyle={
    width:'5rem',
    margin: '0',
    height: '2rem',
    textAlign: 'left',
    color: 'white',
    backgroundColor: 'goldenrod',
    fontSize: '0.9rem',
    fontWeight: 'bold',
    padding:'0.2rem',
    paddingLeft: '10px'
};
let priceStyle = {
    color:'limegreen',
    letterSpacing: '0.5px',
    fontSize:'1.5rem',
    margin:'1rem',
    fontStyle: 'helvetica',
    fontWeight:'bold',
    textAlign: 'center'
};

let buttonStyle={
    width: '95%',
    maxWidth: '100%',
    margin: '2.5%',
    marginBottom: '2.5%',
    fontSize: '1rem',
    borderRadius: '4px',
    ':hover':{
        backgroundColor: 'rgb(10,240,150)',
        boxShadow: '0 0 10px black',
        fontSize:'1.1rem'
    }
}

let productStyle = {
    border:'2px solid lightgray',
    marginBottom: '1.5rem',
}

let bulb= <i className="flaticon-light"></i>

const Product = (props) => (
<Col type="col-sm-4 offset-2" style={productStyle}>
    {props.datas.isOnSale ? <div style={saleStyle}><p>{bulb}AKCIÓ</p></div> : <div style={{...saleStyle,backgroundColor:'transparent'}}><p></p></div>}
    <img src={props.datas.img}/>
    <p style={nameStyle}>{props.datas.name}</p>
    <p style={priceStyle}>{props.datas.price}</p>
    <Button style={buttonStyle} text="Részletek"/>
</Col>
)

export default Radium(Product)