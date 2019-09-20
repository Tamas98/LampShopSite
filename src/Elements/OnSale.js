import React from 'react';
import Radium from 'radium';
import Container from '../Components/Container';
import Product from '../Components/Product';


const OnSale = (props) => {

    let onSale = [];

    let products = [...props.products];

    for(let i = 0;i < products.length;i++){
        let currentProduct = products[i];
        onSale.push(<Product datas={currentProduct} />);
    }

    return( <Container type="container" style={{margin: 'auto'}}>
                <div className="row" style={{textAlign:'center'}}>
                    {onSale}
                </div>
            </Container>
            );

}

export default Radium(OnSale);