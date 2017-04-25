import React, { Component } from "react";

export default class GalleryImage extends Component {
  constructor() {
    super();
  }
  render() {
    return (
      <div className="testimonial__image" style={this.props.style}></div>
    )
  }
}
