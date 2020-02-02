import React, {Component} from 'react';
import api from '../services/api'

export default class Contato extends Component{

    constructor(props){

      super(props);

      this.state = {
        nome:"nome",
        email:"email",
        telefone:"telefone",
        message:"message",

      }

      this.handleSubmit = this.handleSubmit.bind(this);

    }
  async handleSubmit(event){
    event.preventDefault();
  
    const {nome, email, telefone, message} = this.state;

 await api.post('/', {

      nome,
      email,
      telefone,
      message,

    }).then((response)=>{

      alert(response.data);

    });

  }
  render(){
  
    return <div className="w3-container w3-padding-64 w3-theme-l5" id="contato">
    <div className="w3-row">
      <div className="w3-col m5">
      <div className="w3-padding-16"><span className="w3-xlarge w3-border-teal w3-bottombar">Contato</span></div>
        
        <p>Agende seu atendimento através de um de nossos contatos.</p>
        <p><i className="fas fa-phone w3-text-teal w3-xlarge"></i> 87 99988-8611</p>
        <p><i className="fas fa-envelope w3-text-teal w3-xlarge"></i> atedimento@lrfisio.com.br</p>
      </div>
      <div className="w3-col m7">
        <form className="w3-container w3-card-4 w3-padding-16 w3-white" onSubmit={this.handleSubmit} method="POST" target="_blank">
        <div className="w3-section">      
          <label>Nome:</label>
          <input className="w3-input" type="text" onChange={(event)=>{this.setState({nome:event.target.value})}} required=""/>
        </div>
        <div className="w3-section">      
          <label>Email:</label>
          <input className="w3-input" type="text" onChange={(event)=>{this.setState({email:event.target.value})}} required=""/>
        </div>
        <div className="w3-section">      
          <label>Telefone:</label>
          <input className="w3-input" type="tel" max="11"onChange={(event)=>{this.setState({telefone:event.target.value})}} required=""/>
        </div>
        <div className="w3-section">      
          <label>Mensagem:</label>
          <input className="w3-input" type="text" onChange={(event)=>{this.setState({message:event.target.value})}} required=""/>
        </div>  
        <button type="submit" className="w3-button w3-right w3-theme">Enviar</button>
        </form>
      </div>
    </div>
  </div>
  }
  
  };