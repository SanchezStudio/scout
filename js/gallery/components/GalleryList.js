import React, { Component } from "react";
import GalleryImage from "./GalleryImage";
import GalleryQuote from "./GalleryQuote";
import { prefix } from "../../util/helpers";

export default class GalleryList extends Component {
  constructor() {
    super();
    this.state = {
      currentIndex: 0
    }
  }
  componentDidMount() {
    this.timer = setInterval(() => { this.goToNext(); }, 10000);
  }
  componentWillUnmount() {
    clearInterval(this.timer);
  }
  goTo(index) {
    var slider = this.slider;
    var quotes = this.quotes;
    var items = this.props.items;
    var itemsLength = items.length;
    if (index < 0) {
      return;
    } else if (index > itemsLength - 1) {
      this.setState({ currentIndex: 0 });
      prefix(slider.style, "Transform", "translateX(0%)");
      prefix(quotes.style, "Transform", "translateX(0%)");
      return;
    }
    prefix(slider.style, "Transform", "translateX(-" + 100 / itemsLength * index + "%)");
    prefix(quotes.style, "Transform", "translateX(-" + 100 / itemsLength * index + "%)");
    this.setState({ currentIndex: index });
  }
  goToNext(e) {
    if (e) {
      e.preventDefault();
      this.setState({ clicked: true });
    }
    this.goTo(this.state.currentIndex + 1);
  }
  goToPrevious(e) {
    if (e) {
      e.preventDefault();
      this.setState({ clicked: true });
    }
    this.goTo(this.state.currentIndex - 1);
  }
  render() {
    let listStyles = { width: `${this.props.items.length * 100}%` }
    return (
      <div className="testimonial">
        <div className="testimonial__inner">
          <div className="testimonial__images">
            <div className="testimonial__image-list" style={listStyles} ref={(slider) => {this.slider = slider}}>
              {this.props.items.map((item) => {
                let itemStyles = {
                  width: `${100 / this.props.items.length}%`,
                  backgroundImage: `url(${item.assetUrl})`
                }
                return (
                  <GalleryImage key={`image-${item.id}`} style={itemStyles} />
                )
              })}
            </div>
          </div>
          <div className="testimonial__quotes">
            <div className="testimonial__quote-container">
              <div className="testimonial__quote-list" style={listStyles} ref={(quotes) => {this.quotes = quotes}}>
                {this.props.items.map((item) => {
                  let itemStyles = {
                    width: `${100 / this.props.items.length}%`
                  }
                  return ( <GalleryQuote key={`quote-${item.id}`} style={itemStyles} quote={item.body} author={item.title} /> )
                })}
              </div>
            </div>
          </div>
          <div className="controls">
            {this.props.items.map((item, index) => {
              let active;
              this.state.currentIndex === index ? active = "controls__item--active" : active = "";
              return (
                <div key={`control-${item.id}`} className="controls__item-container" onClick={() => { this.goTo(index)} }>
                  <div className={`controls__item ${active}`}></div>
                </div>
              )
            })}
          </div>
        </div>
      </div>
    )
  }
}
