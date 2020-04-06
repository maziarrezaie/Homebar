import React, { Component } from "react";
/* import Oben from "../images/nachoben.png"; */
import { Link } from "react-router-dom";
import YouTube from "react-youtube";

//https://www.youtube.com/watch?v=BCsFV12JiwI

export class Videos extends Component {
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
        autoplay: 2,
      },
    };

    /* const videoId = this.props; */

    return (
      <div className="welcome">
        <div className="headline">
          <span>Videos</span>
        </div>

        <div className="vidscontainer">
          <div className="viddiv">
            <YouTube
              className="videos"
              videoId="LQnAnxNkIrk"
              opts={opts}
              onReady={this.videoOnReady}
            />
            <p className="galeritext">
              Cocktailbar Casablanca bei Gilaniś Auf Livestyle Teil1: Equipment
            </p>
          </div>
          <div className="viddiv">
            <YouTube
              className="videos"
              videoId="FO9vCfcue_w"
              opts={opts}
              onReady={this.videoOnReady}
            />
            <p className="galeritext">
              Cocktailbar Casablanca bei Gilaniś Auf Livestyle Teil2: Tequila
              Sunrise
            </p>
          </div>
          <div className="viddiv">
            <YouTube
              className="videos"
              videoId="4BcEN41NcdE"
              opts={opts}
              onReady={this.videoOnReady}
            />
            <p className="galeritext">
              Cocktailbar Casablanca bei Gilaniś Auf Livestyle Teil3: Mojito
            </p>
          </div>
          <div className="viddiv">
            <YouTube
              className="videos"
              videoId="BOM8EEQyUWI"
              opts={opts}
              onReady={this.videoOnReady}
            />
            <p className="galeritext">
              Cocktailbar Casablanca bei Gilaniś Auf Livestyle Teil4:
              Cosmopolitan
            </p>
          </div>
          <div className="viddiv">
            <YouTube
              className="videos"
              videoId="-dCmqY5yIHA"
              opts={opts}
              onReady={this.videoOnReady}
            />
            <p className="galeritext">
              Cocktailbar Casablanca bei Gilaniś Auf Livestyle. "Showeffekt"
            </p>
          </div>
          <div className="viddiv">
            <YouTube
              className="videos"
              videoId="BCsFV12JiwI"
              opts={opts}
              onReady={this.videoOnReady}
            />
            <p className="galeritext">Gilaniś Cocktails an Bocholter Markt</p>
          </div>
          {/* <div className="videos">
            <video width="320" height="240" controls></video>
          </div> */}
        </div>
        <div>
          <button className="bntgreen" type="submit">
            <Link
              to="/suche"
              className="Pagelink"
              onClick={() =>
                window.scroll({ top: 0, left: 0, behavior: "smooth" })
              }
            >
              Cocktail Generator
            </Link>
          </button>
        </div>
        {/*  <a href="#top">
          {" "}
          <img className="nachoben" src={Oben} alt="Nach oben" />
        </a> */}
      </div>
    );
  }
}

export default Videos;
