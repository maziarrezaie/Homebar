import React, { Component, useEffect, useState, useRef } from "react";
/* import Oben from "../images/nachoben.png"; */
import { Link } from "react-router-dom";
import YouTube from "react-youtube";
const queryString = require("query-string");
//const data;
//https://www.youtube.com/watch?v=BCsFV12JiwI
function videoOnReady(event) {
  event.target.pauseVideo();
}

function Videos() {
  const outside = useRef();
  const [isOpen, setIsOpen] = useState(false);
  const [data, setData] = useState(null);

  const handleClick = (e) => {
    setData(queryString.parse(window.location.search).vid);
    console.log(data);
    if (outside.current.contains(e.target)) {
      return;
    }
    setIsOpen(false);
  };

  useEffect(() => {
    const getClick = document.addEventListener("click", handleClick);

    return () => {
      getClick();
    };
  }, []);

  const opts = {
    width: "280",
    height: "180",

    playerVars: {
      autoplay: 2,
    },
  };

  return (
    <div className="maincontainer">
      <div className="headline">
        <span>Videos</span>
      </div>

      <div className="vidscontainer" ref={outside}>
        {isOpen ? (
          <React.Fragment>
            <div className="modal">
              <p>MODAL IS OPEN</p>
              <YouTube
                className="videos"
                videoId={data}
                opts={opts}
                onReady={videoOnReady}
              />
            </div>
            <div
              className="modal-overlay"
              onClick={() => {
                setIsOpen(false);
              }}
            ></div>
          </React.Fragment>
        ) : null}
        <div className="viddiv" onClick={() => setIsOpen(!isOpen)}>
          <Link to="/videos/?vid=BCsFV12JiwI">
            <img
              src="//i1.ytimg.com/vi/BCsFV12JiwI/mqdefault.jpg"
              className="img-responsive"
            />
          </Link>
          <p className="galeritext">Gilaniś Cocktails an Bocholter Markt</p>
        </div>

        {/*  ================================================================ */}
      </div>
      <div>
        <button className="btngreen" type="submit">
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
    </div>
  );
}

export default Videos;
