import React, { Component } from 'react';

function PageTitle(props) {
        return (
            <div className="annie-homepage-about">
                <div className="container-fluid">
                    <div className="row">
                        <div className="col-md-8 offset-md-2 text-center profile-index animate-box" data-animate-effect="fadeInUp">
                            <p className="annie-about-me">{props.title}</p>
                        </div>
                    </div>
                </div>
            </div>
        );
} 

export default PageTitle;
