import React, { Component } from "react";
import Oben from "../images/nachoben.png";
import GeschPic from "../images/14A.JPG";

export class Welcom extends Component {
  render() {
    return (
      <div className="welcome">
        <div className="headline">
          <span>Why & How to Mix</span>
        </div>
        <img className="blende" src={GeschPic} alt="Hahnen Schwanz" />
        <p className="inhalttextLinks">
          Es gibt verschiedene Methoden, um ein Getränk zu mixen, die ich in
          folgenden Zeilen erklären möchte. Aber zuerst sollte man wissen, warum
          überhaupt ein Getränk gemixt werden soll und noch dazu auf
          verschiedene Arten? In der Regel besteht ein Cocktail aus
          verschiedenen Zutaten wie Säfte, Sirups, Liköre und Spirituosen, die
          je nach physischen Eigenschaften verschieden miteinander verbunden
          werden. Sinn des Mixens ist: die Konsistenz verschiedener Zutaten
          optimal zu vermengen. z.b. Sirups sind mehr oder weniger sehr
          dickflüssig und wenn man die Säfte und Eis zufügt, allein durch die
          niedrige Temperatur des Eises, schwer lösbar, also man shakt sie
          kräftig, damit das Ziel der Lösung erreicht wird. Oder Sahne und
          andere Milchprodukte verstehen sich mit Säuren, die in Säften
          enthalten sind, nicht so gut, gerinnen und setzen sich ab (so wie man
          Käse herstellt), da kommt uns ein Elektromixer, in Fachsprache Englich
          Blender zu Hilfe, der das Ganze quasi durchschlägt! Es gibt allgemein
          vier Arten von Mixen:
        </p>
        <h5> Shaken:</h5>
        <p className="inhalttextLinks">
          hierbei werden die Zutaten inkl. Eiswürfel in den Shaker gegeben und
          beidhändig in waagerechter Haltung in Schulterhöhe nach vorn und
          hinten bewegt. Nach ca. 10 Sekunden ist das Getränk gut durchgemixt
          und gekühlt. Dabei soll man auf drei Sachen achten: 1. man nehme immer
          den längsten Weg 2. die Bewegung ist aus dem Ellebogen 3. Shake the
          Shaker, not yourself
        </p>
        <h5>Rühren:</h5>
        <p className="inhalttextLinks">
          {" "}
          hierbei werden die Zutaten inkl. Eiswürfel ins Rührglas gegeben und
          mit der Rückseite eines Barlöffels von unten nach oben gerührt.
        </p>
        <h5> Blenden:</h5>
        <p className="inhalttextLinks">
          hierbei werden die Zutaten inkl. Eiswürfel in den Blender-Becher
          gegeben und ca. 10 Sekunden geschlagen.
        </p>
        <h5> Gastglas-Zubereitung:</h5>
        <p className="inhalttextLinks">
          {" "}
          hierbei werden die Zutaten ins Gastglas auf Eis gegeben und je nach
          Rezept noch gerührt oder geschichtet.
        </p>
        <h5> Schichten:</h5>
        <p className="inhalttextLinks">
          {" "}
          hierbei werden die Zutaten nicht gemixt, sondern je nach Rezept mit
          oder ohne Eis aufeinander geschichtet wobei die Zutaten, die dichter
          und von der Konsistenz schwerer sind, zuerst ins Gastglas geschichtet
          werden. Damit die Zutaten sich nicht miteinander mischen, werden sie
          mit Hilfe eines Barlöffels ins Glas gegeben und zwar so, daß die
          Zutaten langsam auf die Rückseite des Barlöffels, der ganz dicht auf
          die oberste Schichtfläche gehalten wird, gegossen werden.
        </p>
        {/* <button className="bntred" type="submit">
          Cocktail Generator
        </button> */}
        <a href="top">
          <img className="nachoben" src={Oben} alt="Nach oben" />
        </a>
      </div>
    );
  }
}

export default Welcom;
