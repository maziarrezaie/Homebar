import React, { Component } from "react";
import Oben from "../images/nachoben.png";
import Pic from "../images/gallerieCosmopolitan.png";
import Pic2 from "../images/galleriePicasso.png";
import { Link } from "react-router-dom";
import YouTube from "react-youtube";

export class Welcom extends Component {
  videoOnReady(event) {
    // access to player in all event handlers via event.target
    /* event.target.playVideoAt(50); */
    //50 sanieh
    //event.target.getVideoEmbedCode();
    event.target.pauseVideo();
    //event.target.playVideoAt(10);
  }

  render() {
    const opts = {
      width: "280",
      height: "180",

      playerVars: {
        // https://developers.google.com/youtube/player_parameters
        autoplay: 2
      }
    };

    const { videoId } = this.props;
    return (
      <div className="welcome">
        <div className="headline">
          <span>gefundene Cocktails</span>
        </div>
        <div className="gefundenpics" id="gfpics">
          {/* <img className="thumbpic" src={Pic} alt="Thumb" />
          <img className="thumbpic" src={Pic2} alt="Thumb" />
          <img className="thumbpic" src={Pic} alt="Thumb" />
          <img className="thumbpic" src={Pic2} alt="Thumb" /> */}
        </div>

        <div className="ergiebnisres">
          <div className="auwpicres" id="awpic"></div>
          {/* <img className="auwpicres" id="awpic" src={Pic} alt="Thumb" /> */}
          <span className="rezeptrespons" id="rezres">
            {/* 
            Text von rezept<br></br>Text von rezept<br></br>Text von rezept
            <br></br>Text von rezept<br></br>Text von rezept<br></br>Text von
            rezept<br></br>Text von rezept<br></br> */}
          </span>
          <div className="viddiv">
            <YouTube
              className="videos"
              videoId=" "
              opts={opts}
              onReady={this.videoOnReady}
            />
            <p className="galeritext">
              xxxxxx
            </p>
          </div>
        </div>

        <button className="bntgreen" type="submit">
          <Link to="/suche" className="Pagelink">
            Zurück zu Suche
          </Link>
        </button>
        <br></br>

        <a href="#top">
          {" "}
          <img className="nachoben" src={Oben} alt="Nach oben" />
        </a>
      </div>
    );
  }
}

export default Welcom;
