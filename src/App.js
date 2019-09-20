import React from 'react';
import Radium from 'radium';
import './App.css';
import './Resources/icons/font/flaticon.css';

import NavBar from './Elements/NavBar';
import LetterHead from './Elements/LetterHead';
import Container from './Components/Container';
import Title from './Elements/Title';
import OnSale from './Elements/OnSale';
import BigLamp from './Elements/BigLamp';
import Section from './Elements/Section';
import Gyik from './Elements/Gyik';
import Subscribe from './Elements/Subscribe';
import Partners from './Elements/Partners';
import FooterMenu from './Elements/FootMenu';

import logo from './Resources/logo.png';
import fejlec from './Resources/fejleckep.png';
import lampa from './Resources/lampa.png';
import nagyLampa from './Resources/lampaNagy.png';
import no from './Resources/no.png';
import level from './Resources/boritek.png';
import p1 from './Resources/partner1.png';
import p2 from './Resources/partner2.png';
import p3 from './Resources/partner3.png';
import p4 from './Resources/partner4.png';
import p5 from './Resources/partner5.png';

class App extends React.Component {

  state={
    buttons: ["Főoldal","Termék","GYIK"],
    
    images : {
      logo: logo,
      fejlec: fejlec,
      lampa: lampa,
      nagylampa: nagyLampa,
      no: no,
      level: level,
      partners: [p1,p2,p3,p4,p5]
    },

    onSale: [
      {
        isOnSale: true,
        img: lampa,
        name: "Kék asztali lámpa",
        price: "2 000 Ft"
      },
      {
        isOnSale: true,
        img: lampa,
        name: "Kék asztali lámpa",
        price: "2 000 Ft"
      },
      {
        isOnSale: false,
        img: lampa,
        name: "Kék asztali lámpa",
        price: "2 000 Ft"
      },
    ],

    showMore: false,
    OpsAndRates: {
      choosen: false,
      number: 2
    },
    open: [false,false,false],
    gyikOpac: [0,0,0],

   

    partners: {
    general: {
      from: 0,
      to: 4,
      isPushed: false
    },
    partnerData: [
      {
        logo: p1,
        link: "https://i.redd.it/l10muzggrg601.jpg"
      },
      {
        logo: p2,
        link: "https://i.redd.it/l10muzggrg601.jpg"
      },
      {
        logo: p3,
        link: "https://i.redd.it/l10muzggrg601.jpg"
      },
      {
        logo: p4,
        link: "https://i.redd.it/l10muzggrg601.jpg"
      },
      {
        logo: p5,
        link: "https://i.redd.it/l10muzggrg601.jpg"
      },
    ]
  },
    isPushed: false

  }

  moreHandler = () =>{
    this.setState({showMore: !this.state.showMore});
  }

  choosenHandler = (id) => {
    
    if(id === "velemenyek"){
      this.setState({OpsAndRates:
        { 
          choosen: false,
          number: 2
        }
      })
    }else{
      this.setState({OpsAndRates:    
        { 
          choosen: true,
          number: 2
        }
    })
    }
  }

  megTobbHandler = () => {
    if(this.state.OpsAndRates.number !== 2){
      this.setState({OpsAndRates: {
        choosen: this.state.OpsAndRates.choosen,
        number: 2
      }})
    }else{
      this.setState({OpsAndRates: {
        choosen: this.state.OpsAndRates.choosen,
        number: 4
      }})
    }
  }

  showAnswerHandler = (index) =>{
    let openCopy = this.state.open;
    let opacity = this.state.gyikOpac;
    
    if(!this.state.open[index]){
      openCopy[index] = !openCopy[index]
      opacity[index] = 100
      this.setState({open: openCopy})
      this.setState({gyikOpac: opacity});
    }else{
      openCopy[index] = !openCopy[index]
      opacity[index] = 0
      this.setState({open: openCopy})
      this.setState({gyikOpac: opacity});
    }
  }

  pushedHandler = (id) => {

    let currState = this.state.partners;
    let partners = [...document.getElementsByClassName("partnerek")]
    
    if(id==="left"){
      this.setState((prevState,props) => {
        if(currState.general.from < currState.partnerData.length-4){
          currState.general.from += 1
          currState.general.to += 1
        }
        currState.general.isPushed = true;
        return({partners: currState})
    });
    }else{
      this.setState((prevState,props) => {
        if(currState.general.from > 0){
          currState.general.from -= 1
          currState.general.to -= 1
        }
        currState.general.isPushed = false;
        return({partners: currState})
      });
      }
    }
  
    lampShopStyle= {
      margin:'auto',
      width: '20%',
      color:'rgba(211, 211, 211, 0.295)',
      padding:'1% 0 3% 0',
      fontSize:'1.5rem',
      transition: 'all 1s ease 0s',
      ':hover':{
        fontSize: '1.6rem',
        color: 'lightyellow',
        cursor: 'pointer',
        textShadow: '0 0 10px white',
        letterSpacing: '0.1rem'
      }
    }


  render(){
    return (
      <Container>

        <NavBar img={this.state.images.logo} buttons={this.state.buttons}/>
        <LetterHead img={this.state.images.fejlec}/>
        <Title text="Kiemelt termékek"/>
        <OnSale products={this.state.onSale}/>

        <div style={{borderBottom:'3px solid lightgray',margin: '3rem 0'}}></div>

        <BigLamp handler={this.moreHandler} more={this.state.showMore} img={this.state.images.nagylampa}/>

        <Container style={{backgroundColor:'rgb(237,241,251)',paddingTop:'5rem'}}>
          <Section 
            handler={this.choosenHandler} 
            choosen={this.state.OpsAndRates.choosen}
            megtobb={this.megTobbHandler}
            num={this.state.OpsAndRates.number} 
            img={this.state.images.no}/>

          <Title text="Gyakran Ismétlődő kérdések"/>
          <Gyik opac={this.state.gyikOpac} handler={this.showAnswerHandler}/>
        </Container>

        <Subscribe img={this.state.images.level}/>

        <Container style={{backgroundColor: 'midnightblue'}}>

          <Title text="Partnereink" style={{color:'white',paddingTop:"4rem"}}/>

          <Partners general={this.state.partners.general} 
                    handler={this.pushedHandler} 
                    partners={this.state.partners.partnerData}/>

          <FooterMenu/>
          <Title text='Lámpa Bolt | 2018' style={this.lampShopStyle}/>
        </Container>

      </Container>
    )
  }
}

export default Radium(App);
