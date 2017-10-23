import AOS from 'aos';

!(function() {
  let listings = document.getElementById("listings-item");

  if (listings) {
    let images = document.querySelectorAll("img.thumb-image");
    let imagesArray = [...images];
    let text = document.querySelectorAll("div.html-block");
    let textArray = [...text];
    let map = document.querySelectorAll("div.map-block");
    let mapArray = [...map];

    function addAOS(element, animation, duration, offset) {
      element.dataset.aos = animation;
      element.dataset.aosDuration = duration;
      element.dataset.offset = offset;
    }

    function cycle(elements) {
      for (var i = 0; i < elements.length; i++) {
        addAOS(elements[i], "fade-up", "800", "150");
      }
    };

    cycle(imagesArray);
    cycle(textArray);
    cycle(mapArray);

    // AOS.refresh();

    // function onClick (e) {
    //   console.log(e.target);
    // }

    // window.addEventListener("click", function(e) {
    //   e.preventDefault();
    //   console.log(e);
    // }, false);
  }

})();
