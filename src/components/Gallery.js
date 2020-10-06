import React, { Component } from "react";
import GalleryImageBox from "./GalleryImageBox";
import PageTitle from "./PageTitle";
import PageFooter from "./PageFooter";

function Gallery() {
  return (
    <div>
      <PageTitle title="this is gallery"></PageTitle>
      <div className="annie-service">
        <div className="container-fluid">
          <div className="row">
            <GalleryImageBox></GalleryImageBox>
            <GalleryImageBox></GalleryImageBox>
            <GalleryImageBox></GalleryImageBox>
            <GalleryImageBox></GalleryImageBox>
          </div>
          <PageFooter></PageFooter>
        </div>
      </div>
    </div>
  );
}

export default Gallery;
