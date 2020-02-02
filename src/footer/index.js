import React, {Component} from 'react';

export default class Footer extends Component{

  render(){
  
    return <div className="w3-container w3-padding-32 w3-theme-d1 w3-center">
      <h4>Siga-nos</h4>
      <a className="w3-button w3-large w3-teal" href="https://www.facebook.com/lr.fisio.7" target="_blank" rel="noreferrer noopener" title="Facebook"><i className="fab fa-facebook-square"></i></a>
      <a className="w3-button w3-large w3-teal" href="https://instagram.com/lrfisiodomiciliar" title="Instagram" target="_blank" rel="noreferrer noopener"><i className="fab fa-instagram"></i></a>
      <a className="w3-button w3-large w3-teal w3-hide-small" href="https://www.facebook.com/messages/t/lr.fisio.7" title="Facebook Messenger" target="_blank" rel="noreferrer noopener"><i className="fab fa-facebook-messenger"></i></a>
      <p>Desenvolvido por <a href="https://www.qualisec.net.br" target="_blank" rel="noreferrer noopener">Qualisec Soluções</a></p>
      <div id="topo" className="w3-tooltip w3-right">
        <span className="w3-text w3-padding w3-teal w3-hide-small">Ir para o Topo</span>   
        <a className="w3-button w3-theme" href="./"><span className="w3-xlarge">
        <i className="fas fa-angle-double-up"></i></span></a>
      </div> 
    </div>
  }
  
  };