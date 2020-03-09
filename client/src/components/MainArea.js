import React, { Component } from "react";
import "../App.css";
import Welcom from "./mainareaComponents/Welcom";
import Suche from "./mainareaComponents/Suche";
import Gefunden from "./mainareaComponents/Gefunden";
import Geschichte from "./mainareaComponents/Geschichte";
import Techniken from "./mainareaComponents/Techniken";
import Equipment from "./mainareaComponents/Equipment";
import Add from "./mainareaComponents/Addform";
import Reg from "./mainareaComponents/Regform";

import { BrowserRouter as Router, Route } from "react-router-dom";

export class MainArea extends Component {
  render() {
    return (
      <div>
        <Route path="/geschichte" exact component={Geschichte} />
        <Route path="/equipment" exact component={Equipment} />
        <Route path="/techniken" exact component={Techniken} />
        {/* <Route path="/cocktailliste" exact component={Cocktailliste} />
        <Route path="/video" exact component={Video} /> */}
        <Route path="/" exact component={Welcom} />
        <Route path="/suche" exact component={Suche} />
        <Route path="/gefunden" exact component={Gefunden} />
      </div>
    );
  }
}

export default MainArea;
