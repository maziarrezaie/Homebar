import React, { Component } from "react";
import { Link } from "react-router-dom";

const axios = require("axios");
export class Loginform extends Component {
  state = {
    logUser: {
      uemailadress: "",
      upassword: ""
    }
  };

  changeHandler = e => {
    this.setState({
      logUser: {
        ...this.state.logUser,
        [e.target.id]: e.target.value
      }
    });
  };

  logUser = () => {
    axios.post("http://localhost:5000/users", this.state.logUser).then(res => {
      console.log(res);
    });
  };

  /* ---------------------------------------------------------------------------------------- */

  render() {
    return (
      <div className="login">
        <div className="headline">
          <span>Login</span>
        </div>
        <div className="addcontainer">
          <form
            className="addform"
            onSubmit={e => {
              e.preventDefault();
              this.logUser();
            }}
          >
            <div className="schalter">
              <br></br>
            </div>

            <br></br>

            <br></br>
            <label className="fildlable">E-Mail Adresse*:</label>
            <input
              className="addfild"
              id="uemailadress"
              type="text"
              onChange={this.changeHandler}
              required
            />
            <br></br>

            <br></br>
            <label className="fildlable">Password*:</label>
            <input
              className="addfild"
              id="upassword"
              type="password"
              minlength="4"
              onChange={this.changeHandler}
              required
            />
            <br></br>
            <div className="logorout">
              <Link to="/welcome">
                <input
                  className="bntabbrechen"
                  type="button"
                  value="Abbrechen"
                />
              </Link>
              <input
                className="bntlogin"
                type="submit"
                value="Jetzt Einlogen"
              />
            </div>
          </form>
        </div>
      </div>
    );
  }
}

export default Loginform;
