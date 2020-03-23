import React, { Component } from "react";
import Oben from "../images/nachoben.png";
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
      width: "320",
      height: "240",

      playerVars: {
        // https://developers.google.com/youtube/player_parameters
        autoplay: 2
      }
    };

    const { videoId } = this.props;

    return (
      <div className="welcome">
        <div className="headline">
          <span>Videos</span>
        </div>
        <div className="addcontainer">
          <YouTube
            className="videos"
            videoId="BCsFV12JiwI"
            opts={opts}
            onReady={this.videoOnReady}
          />
          <YouTube
            className="videos"
            videoId="lSkxPlfGoCc"
            opts={opts}
            onReady={this.videoOnReady}
          />
          {/* <div className="videos">
            <video width="320" height="240" controls></video>
          </div> */}
        </div>
        <div>
          <button className="bntgreen" type="submit">
            <Link to="/suche" className="Pagelink">
              Cocktail Generator
            </Link>
          </button>
        </div>
        <a href="#top">
          {" "}
          <img className="nachoben" src={Oben} alt="Nach oben" />
        </a>
      </div>
    );
  }
}

export default Videos;
