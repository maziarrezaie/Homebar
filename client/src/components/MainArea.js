import React, { Component } from "react";
import "../App.css";
import Welcome from "./mainareaComponents/Welcome";
import Suche from "./mainareaComponents/Suche";
import Gefunden from "./mainareaComponents/Gefunden";
import Geschichte from "./mainareaComponents/Geschichte";
import Techniken from "./mainareaComponents/Techniken";
import Equipment from "./mainareaComponents/Equipment";
import Add from "./mainareaComponents/Addform";
import Reg from "./mainareaComponents/Regform";
import Log from "./mainareaComponents/Loginform";

import { Route } from "react-router-dom";

export class MainArea extends Component {
  render() {
    return (
      <div>
        <Route path="/welcome" exact component={Welcome} />
        <Route path="/geschichte" exact component={Geschichte} />
        <Route path="/equipment" exact component={Equipment} />
        <Route path="/techniken" exact component={Techniken} />
        {/* <Route path="/cocktailliste" exact component={Cocktailliste} />
        <Route path="/video" exact component={Video} /> */}
        <Route path="/" exact component={Welcome} />
        <Route path="/suche" exact component={Suche} />
        <Route path="/gefunden" exact component={Gefunden} />
        <Route path="/register" exact component={Reg} />
        <Route path="/addneudrink" exact component={Add} />
        <Route path="/loginform" exact component={Log} />
      </div>
    );
  }
}

export default MainArea;
