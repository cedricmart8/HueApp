import React, { Component } from 'react';
const superagent = require('superagent');
const huejay = require('huejay');

class Parametre extends Component {
  constructor(props){
    super(props);
    this.state = {
      scheduleProps: '',
      lightProps: ''
    };
  }
  render() {
    // var key = "UsNxwkK1ID5OiOTmhg-e2Gt9yVkb0Hr8oNGNsCSq"
    // var IPBridge = "192.168.1.66"
    
    let client = new huejay.Client({
      host:     '192.168.1.66',
      port:     80,       // Optional
      username: 'UsNxwkK1ID5OiOTmhg-e2Gt9yVkb0Hr8oNGNsCSq', // Optional
      timeout:  15000,    // Optional, timeout in milliseconds (15000 is the default)
    });


    let user = new client.users.User;

    // Optionally configure a device type / agent on the user
    user.deviceType = 'huejay'; // Default is 'huejay'

    client.lights.getAll()
    .then(lights => {
      for (let light of lights) {        
        light.brightness     = 254; //Luminosite (0 a 254)
        light.colorTemp      = 500; //Temperature de couleur (153 a 500)
        light.transitionTime = 1; //Temps de transition (infini)
        light.alert = "select"; //lselect pour clognoter tout le temps select pour clognoter seulement une fois ou none 
        light.effect = "none"; //soit colorloop soit none
        client.lights.save(light);
      }
    });

    client.lights.getById(1)
    .then(light => {
      console.log('Found light:');
      console.log(`  Light [${light.id}]: ${light.name}`);
      console.log(`  brightness [${light.brightness}]`);
      console.log(`  colorTemp [${light.colorTemp}]`);
      console.log(`  transitionTime [${light.transitionTime}]`);
    })
    .catch(error => {
      console.log('Could not find light');
      console.log(error.stack);
    });  

    return (
      <div className="App">
        <a className="App-link" href="https://reactjs.org">
          Parametre
        </a>
      </div>
    );
  }
}

export default Parametre;
