import React, { Component } from 'react';
import { MDBBtn } from "mdbreact";
const huejay = require('huejay');

class Parametre extends Component {
  constructor(props){
    super(props);
    this.client = ''
    this.state = {
    }; 
    this.alertLight = this.alertLight.bind(this);
  }

  alertLight(){
    this.client.lights.getAll()
    .then(lights => {  
      console.log("alert");   
      for (let light of lights) {   
        light.alert = "select"; //lselect pour clognoter tout le temps select pour clignoter seulement une fois ou none 
        this.client.lights.save(light);
      }
    });
  };
  
  render() {
    this.client = new huejay.Client({
      host:     '192.168.1.66',
      username: 'UsNxwkK1ID5OiOTmhg-e2Gt9yVkb0Hr8oNGNsCSq',
      port:     80,
      timeout:  15000,    // Optional, timeout in milliseconds (15000 is the default)
    });  

    return (
      <div className="App">
        <p>
          Parametre
        </p>
        <MDBBtn color="elegant" onClick={this.alertLight}>Elegant</MDBBtn>
      </div>
    );
  }
}

export default Parametre;
