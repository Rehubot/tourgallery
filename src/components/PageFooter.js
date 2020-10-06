import React, { Component } from "react";
import PageTitle from "./PageTitle";

function PageFooter(props) {
  return (
    <div id="annie-footer">
      <div className="annie-narrow-content">
        <div className="row">
          <div className="col-md-12 text-center">
            <h1>
              MOCT Tour Gallery <span>Online Photo Exhibition</span>
            </h1>
            <p className="annie-lead">&copy; 2020 Ministry of innovation</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default PageFooter;
