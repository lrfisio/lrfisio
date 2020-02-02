import React, {Component} from 'react';
import avatar1 from '../img/avatar.jpg';
import avatar2 from '../img/avatar2.png';


export default class Sobre extends Component{

  render(){

return <div className="w3-container w3-padding-64 w3-center" id="sobre">
<h2>Sobre</h2>
<p>LF FISIO - Fisioterapia domiciliar</p>

<div className="w3-row">

<div className="w3-quarter">
  <img src={avatar1} alt="Luma" className="w3-circle w3-hover-opacity avatars"/>
  <h3>Dra. Luma Rammara Graja</h3>
  <p>Fisioterapeuta</p>
</div>

<div className="w3-quarter">
  <img src={avatar2} alt="Enterprise" className="w3-circle w3-hover-opacity avatars"/>
  <h3>LF FISIO</h3>
  <p>Empresa</p>
</div>
</div>
</div>

}
  
};