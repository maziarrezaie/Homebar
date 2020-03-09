import React, { Component } from 'react'
import "../App.css";
import Bolslogo from "./images/bols.png";
import Vahingelogo from "./images/vahinger.png";
import Havanalogo from "./images/havana.png";
import Smirnoflogo from "./images/smirnof.png";



export class Sponsor extends Component {
    render() {
        return (
            
                <div className="sponsnav">
                   <img className="sponslogo" src={Bolslogo} alt="Sponsor Logo" />
                   <img className="sponslogo" src={Vahingelogo} alt="Vahinger Logo" />
                   <img className="sponslogo" src={Havanalogo} alt="Havana Logo" />
                   <img className="sponslogo" src={Smirnoflogo} alt="Smirnoff Logo" />  
                </div>
            
        )
    }
}

export default Sponsor
