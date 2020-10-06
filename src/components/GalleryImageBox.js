import React, { Component } from "react";

class AnimateBox extends Component {
  render() {
    return (
      <div className="col-md-4 animate-box" data-animate-effect="fadeInUp">
        <div className="annie-services">
          <a href="services-post.html">
            <img
              src={require("../assets/images/gallery/04.jpg")}
              className="img-fluid"
              alt=""
            />
            <div className="desc">
              <div className="con">
                <div className="annie-icon">
                  {" "}
                  <i className="fa fa-camera-retro"></i>{" "}
                </div>
                <h3>Wedding Shoots</h3>
              </div>
            </div>
          </a>
        </div>
      </div>
    );
  }
}

export default AnimateBox;
