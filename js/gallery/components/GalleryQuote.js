import React, { Component } from "react";

export default class GalleryQuote extends Component {
  constructor() {
    super();
  }
  render() {
    return (
      <div className="testimonial__quote" style={this.props.style}>
        <div className="testimonial__double-quote quote">“</div>
        <div className="testimonial__content" dangerouslySetInnerHTML={{ __html: this.props.quote }}></div>
        <h3 className="testimonial__author">{this.props.author}</h3>
      </div>
    )
  }
}
