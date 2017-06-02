import React, { Component } from "react";

export default class GalleryQuote extends Component {
  constructor() {
    super();
  }
  render() {
    let active;
    this.props.active ? active = "testimonial__quote--active" : active = "";
    return (
      <div className={`testimonial__quote ${active}`} style={this.props.style}>
        <div className="testimonial__double-quote quote">“</div>
        <div className="testimonial__content" dangerouslySetInnerHTML={{ __html: this.props.quote }}></div>
        <h3 className="testimonial__author">{this.props.author}</h3>
      </div>
    )
  }
}
