import React, { Component } from "react";
import ReactDOM from "react-dom";
import axios from "axios";
import { procEvent } from "../util/helpers";
import GalleryList from "./components/GalleryList";

class GalleryContainer extends Component {
  constructor() {
    super();

    this.state = {
      items: []
    }
  }
  componentDidMount() {
    axios(`/${this.props.url}?format=json`)
      .then((response) => {
        this.setState({ items: response.data.items });
        procEvent(window.document, "DOMContentLoaded");
      })
      .catch((response) => {
        console.error(response);
      });
  }
  render() {
    return (
      <div>
        { this.state.items.length > 0 ? <GalleryList items={this.state.items} /> : null }
      </div>
    )
  }
}

let GalleryElement = document.getElementById("gallery");

if (GalleryElement) {
  let url = GalleryElement.dataset.url;
  ReactDOM.render(<GalleryContainer url={url} />, GalleryElement);
}
