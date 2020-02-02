import React from 'react';
import './global.css';
import Header from './header';
import Sobre from './sobre';
import Contato from './contato';
import Footer from './footer';
import whatsapp from './img/whats.png';

const App = ()=>(
  <div className="App">
    <Header/>
    <Sobre/>
    <Contato/>
    <Footer/>
    <div className="w3-container w3-display-bottomleft w3-margin-bottom">  
    <a  className="w3-xlarge" href="https://api.whatsapp.com/send?phone=55879988611" target="_blank" rel="noopener noreferrer"><img src={whatsapp} alt="whatsapp"/></a>
  </div>
  </div>
);

export default App;