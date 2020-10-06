import React, { Component } from 'react';

class Logo extends Component {
    render() {
        return (
        <div className="annie-logo">
            <img
              src={require("../assets/images/logo.png")}
              className="img-fluid"
              alt=""
            />
            <h1><a href="#">Tour Gallery<span>MOCT online Photo Exhibition</span></a></h1>
        </div>
        );
    }
} 

export default Logo;
