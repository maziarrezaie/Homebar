import React, { Component } from "react";
import Oben from "../images/nachoben.png";
import { Link } from "react-router-dom";
import videojs from 'video.js'





export class Videos extends Component {
  render() {
    return (
      <div className="welcome">
        <div className="headline">
          <span>Videos</span>
        </div>
        <div className="addcontainer">
          <div className="videos">
            <video width="320" height="240" controls></video>
          </div>
        </div>

        <a href="top">
          <img className="nachoben" src={Oben} alt="Nach oben" />
        </a>
      </div>
    );
  }
}

export default Videos;
