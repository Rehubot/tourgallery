import React, { Component } from "react";
import GalleryImageBox from "./GalleryImageBox";
import PageTitle from "./PageTitle";

function Gallery(props) {
  return (
    <div>
      <PageTitle></PageTitle>
      <div className="row">
        <GalleryImageBox></GalleryImageBox>
      </div>{" "}
    </div>
  );
}

export default Gallery;
