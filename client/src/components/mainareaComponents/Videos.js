import React, { Component, useEffect, useState, useRef } from "react";
/* import Oben from "../images/nachoben.png"; */
import { Link } from "react-router-dom";
import YouTube from "react-youtube";

//https://www.youtube.com/watch?v=BCsFV12JiwI

function Videos() {
  const outside = useRef();
  const [isOpen, setIsOpen] = useState(false);

  const handleClick = (e) => {
    if (outside.current.contains(e.target)) {
      return;
    }
    setIsOpen(false);
  };

  useEffect(() => {
    const getClick = document.addEventListener('click', handleClick)

    return () => {
      getClick()
    }
  }, [])

  /* videoOnReady((event)=> {
    event.target.pauseVideo();
  },) */

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
              <div className="modal">
                <p>MODAL IS OPEN</p>
              </div>
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
