import React, { Component } from "react";
import GalleryImage from "./GalleryImage";
import GalleryQuote from "./GalleryQuote";

export default class GalleryList extends Component {
  constructor() {
    super();
    this.state = {
      currentIndex: 0
    }
  }
  componentDidMount() {
    this.timer = setInterval(() => { this.goToNext(); }, 16000);
  }
  componentWillUnmount() {
    clearInterval(this.timer);
  }
  goTo(index) {
    var items = this.props.items;
    var itemsLength = items.length;
    if (index < 0) {
      this.setState({ currentIndex: itemsLength - 1})
      return;
    } else if (index > itemsLength - 1) {
      this.setState({ currentIndex: 0 });
      return;
    }
    this.setState({ currentIndex: index });
  }
  goToNext(click) {
    if (click) { clearInterval(this.timer); }
    this.goTo(this.state.currentIndex + 1);
  }
  goToPrevious(click) {
    if (click) { clearInterval(this.timer) }
    this.goTo(this.state.currentIndex - 1);
  }
  render() {
    return (
      <div className="testimonial">
        <div className="testimonial__inner">
          <div className="testimonial__images">
            <div className="testimonial__image-list" ref={(slider) => {this.slider = slider}}>
              {this.props.items.map((item, index) => {
                let itemStyles = { backgroundImage: `url(${item.assetUrl}?format=original)` }
                let active;
                this.state.currentIndex === index ? active = true : active = false;
                return (
                  <GalleryImage key={`image-${item.id}`} style={itemStyles} active={active} />
                )
              })}
            </div>
          </div>
          <div className="testimonial__quotes">
            {this.props.items.map((item, index) => {
              let active;
              this.state.currentIndex === index ? active = true : active = false;
              return ( <GalleryQuote key={`quote-${item.id}`} quote={item.body} author={item.title} active={active}/> )
            })}
          </div>
          {/*
          indicators
          <div className="indicators">
            {this.props.items.map((item, index) => {
              let active;
              this.state.currentIndex === index ? active = "indicators__item--active" : active = "";
              return (
                <div key={`indicators-${item.id}`} className="indicators__item-container" onClick={() => { this.goTo(index)} }>
                  <div className={`indicators__item ${active}`}></div>
                </div>
              )
            })}
          </div>
          */}
          <div className="controls">
            <div className="controls__item controls__item--left" onClick={() => {this.goToPrevious(true)} }>
              <img className="controls__image" src="/assets/icon-arrow-left.svg" alt=""/>
            </div>
            <div className="controls__item controls__item--right" onClick={() => {this.goToNext(true)} }>
              <img className="controls__image" src="/assets/icon-arrow-right.svg" alt=""/>
            </div>
          </div>
        </div>
      </div>
    )
  }
}
