import React, { Component } from "react";

export default class GalleryImage extends Component {
  constructor() {
    super();
  }
  render() {
    let active;
    this.props.active ? active = "testimonial__image--active" : active = "";
    return (
      <div className={`testimonial__image ${active}`} style={this.props.style}></div>
    )
  }
}
