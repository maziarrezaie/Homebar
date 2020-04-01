import React, { Component } from "react";
import Oben from "../images/nachoben.png";
//import Pic from "../images/gallerieCosmopolitan.png";
//import Pic2 from "../images/galleriePicasso.png";
import { Link } from "react-router-dom";
import YouTube from "react-youtube";

export class gefunden extends Component {
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
    //console.log(this.props.history.location.state.searchResp[0].cname);

    // const { videoId } = this.props;
    return (
      <div className="welcome">
        <div className="headline">
          <span>gefundene Cocktails</span>
        </div>
        {/* <div className="gefundenpics" id="gfpics">
          
        </div> */}

        <div className="ergiebnisres">
          <span className="rezeptrespons" id="rezres">
            {this.props.history.location.state.searchResp.map(
              (drink, index) => (
                <div className="packet" key={index}>
                  <img
                    className="auwpicres"
                    src={`http://localhost:5000/images/${drink.cpic}`}
                    alt="Thumb"
                  />
                  <div className="packetText">
                    <figcaption className="inhalttextLinks">
                      {drink.cname}
                    </figcaption>
                    <br></br>
                    <figcaption className="inhalttextLinks">
                      {drink.zutaten.map((elem, index) => (
                        <React.Fragment>
                          <span>{elem.menge + " " + elem.zutat}</span>

                          <br></br>
                        </React.Fragment>
                      ))}
                    </figcaption>
                    <br></br>
                    <figcaption className="inhalttextLinks">
                      {drink.zubreitung}
                    </figcaption>
                  </div>
                  <div className="viddiv">
                    <YouTube
                      className="videos"
                      videoId={drink.cvid}
                      opts={opts}
                      onReady={this.videoOnReady}
                    />
                    <p className="galeritext">
                      {drink.cname + " " + "Lernvideo"}
                    </p>
                  </div>
                </div>
              )
            )}
          </span>
          {/* <div className="viddiv">
            <YouTube
              className="videos"
              videoId=" "
              opts={opts}
              onReady={this.videoOnReady}
            />
            <p className="galeritext">xxxxxx</p>
          </div> */}
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

export default gefunden;
