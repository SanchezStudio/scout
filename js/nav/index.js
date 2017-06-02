import Headroom from "headroom.js";

!(function() {
  let toggle = document.querySelectorAll(".nav__toggle")[0];
  let latestKnownScroll = 0;
  let ticking = false;
  let hero = document.querySelector(".hero--header");
  let header = document.querySelector("header");
  let headroom = new Headroom(header);
  let main = document.querySelector(".contain-it"),
      w = window,
      d = document,
      html = d.documentElement,
      g = d.getElementsByTagName('body')[0],
      x = w.innerWidth || html.clientWidth || g.clientWidth,
      y = w.innerHeight|| html.clientHeight|| g.clientHeight;

  if (x <= 768) { headroom.init(); }

  if (!hero) {
    html.classList.add("nav-scrolled");
  }

  function onClick(event) {
    event.preventDefault();

    if (html.classList.contains("nav-active")) {
      // close navigation
      html.classList.remove("nav-active");
      main.removeAttribute("style");
      document.documentElement.scrollTop = document.body.scrollTop = main.dataset["y"];
    } else {
      // open navigation
      html.classList.add("nav-active");
      main.style.transform = `translateY(-${latestKnownScroll}px)`;
      main.dataset["y"] = latestKnownScroll;
    }

  }

  function onScroll() {
    latestKnownScroll = window.scrollY;
    requestTick();
  }

  function onResize() {
    if (x >= 769) {
      html.classList.remove("nav-active");
      headroom.destroy();
    } else {
      headroom.init();
    }
  }

  function requestTick() {
    if (!ticking) {
      window.requestAnimationFrame(update);
    }
    ticking = true;
  }

  function update() {
    ticking = false;

    if (hero && latestKnownScroll >= (hero.clientHeight * 0.65)){
      html.classList.add('nav-scrolled');
    } else if (!hero) {
      html.classList.add('nav-scrolled');
    } else {
      html.classList.remove('nav-scrolled');
    }
  }

  onScroll();
  window.addEventListener('resize', onResize, false);
  window.addEventListener('scroll', onScroll, false);
  toggle.addEventListener('click', onClick, false);

})();
