import React from 'react';
import imgTopo from '../img/topo.png';

const Header = ()=>(

  <header>

<div className="w3-bar w3-theme-d2 w3-left-align">
  <a href="#inicial" className="w3-bar-item w3-button w3-teal" ><i className="fas fa-home w3-margin-right"></i>Inicial</a>
  <a href="#sobre" className="w3-bar-item w3-button w3-hide-small w3-hover-white"><i className="fa fa-about w3-margin-right"></i>Sobre</a>
  <a href="#info" className="w3-bar-item w3-button w3-hide-small w3-hover-white">Informativo</a>
  <a href="#contato" className="w3-bar-item w3-button w3-hide-small w3-hover-white">Contato</a>
    </div>

    <div className="w3-display-container w3-animate-opacity">
  <img src={imgTopo} alt="lrfisio" id="img_topo"/>

</div>

  </header>

);

export default Header;