import React, { Component } from 'react';
import { MDBBtn } from "mdbreact";
const huejay = require('huejay');

class Accueil extends Component {
  constructor(props){
    super(props);
    this.client = ''
    this.state = {
    }; 
    this.alertLight = this.alertLight.bind(this);
    this.colorLoop = this.colorLoop.bind(this);
    this.lumineux = this.lumineux.bind(this);
  }

  alertLight(){
    this.client.lights.getAll()
    .then(lights => {  
      console.log("alert");   
      for (let light of lights) { 
        light.on = true;   
        light.alert = "select"; 
        this.client.lights.save(light);
      }
    });
  };

  colorLoop(){
    this.client.lights.getAll()
    .then(lights => {  
      console.log("colorLoop");   
      for (let light of lights) { 
        light.on = true;   
        light.effect = "colorloop"; 
        light.transitionTime = 3;
        this.client.lights.save(light);
      }
    });
  };
  
  lumineux(){
    this.client.lights.getAll()
    .then(lights => {  
      console.log("Lumineux");   
      for (let light of lights) {
        light.on = true; 
        light.brightness = 254;
        light.hue        = 32554;
        light.saturation = 140;
        light.effect = "none"; 
        light.alert = "none"; 
        light.colorTemp = 366;
        this.client.lights.save(light);
      }
    });
  };
  
  render() {
    this.client = new huejay.Client({
      host:     '192.168.1.66',
      username: 'UsNxwkK1ID5OiOTmhg-e2Gt9yVkb0Hr8oNGNsCSq',
      port:     80,
      timeout:  15000,
    });  

    return (
      <div className="App">
        <p>
          Accueil
        </p>
        <MDBBtn color="elegant" onClick={this.alertLight}>Alert</MDBBtn>
        <MDBBtn color="elegant" onClick={this.colorLoop}>ColorLoop</MDBBtn>
        <MDBBtn color="elegant" onClick={this.lumineux}>Lumineux</MDBBtn>
      </div>
    );
  }
}

export default Accueil;
