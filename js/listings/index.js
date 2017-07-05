import AOS from 'aos';

!(function() {
  let listings = document.getElementById("listings-item");

  if (listings) {
    let images = document.querySelectorAll("img.thumb-image");
    let text = document.querySelectorAll("div.html-block");
    let map = document.querySelectorAll("div.map-block");

    function addAOS(element, animation, duration, offset) {
      element.dataset.aos = animation;
      element.dataset.aosDuration = duration;
      element.dataset.offset = offset;
    }

    function cycle(elements) {
      elements.forEach((item) => {
        addAOS(item, "fade-up", "800", "150");
      });
    };

    cycle(images);
    cycle(text);
    cycle(map);

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
