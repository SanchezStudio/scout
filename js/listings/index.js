import { procEvent } from "../util/helpers";

!(function() {
  let listings = document.getElementById("listings");

  if (listings) {
    procEvent(window.document, "DOMContentLoaded");
  }

});
