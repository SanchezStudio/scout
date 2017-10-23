import Headroom from "headroom.js";

!(function() {
  let toggle = document.querySelectorAll(".nav__toggle")[0];
  let latestKnownScroll = 0;
  let ticking = false;
  let hero = document.querySelector(".hero--header");
  let header = document.querySelector("header");
  let headroom = new Headroom(header),
      w = window,
      d = document,
      html = d.documentElement,
      g = d.getElementsByTagName('body')[0],
      x = w.innerWidth || html.clientWidth || g.clientWidth,
      y = w.innerHeight|| html.clientHeight|| g.clientHeight,
      scrollY = 0,
      scrollX = 0;

  if (x <= 768) { headroom.init(); }

  if (!hero) {
    html.classList.add("nav-scrolled");
  }

  function disableScroll() {
    window.scrollTo(scrollX, scrollY);
  }

  function onClick () {
    scrollY = window.scrollY;
    scrollX = window.scrollX;

    if (html.classList.contains("nav-active")) {
      // close navigation
      html.classList.remove("nav-active");
      headroom.init();
      window.removeEventListener("scroll", disableScroll, false);
      // window.removeEventListener("touchmove", disableScroll, false);
      // main.removeAttribute("style");
      // document.documentElement.scrollTop = document.body.scrollTop = main.dataset["y"];
    } else {
      // open navigation
      html.classList.add("nav-active");
      headroom.destroy();
      window.addEventListener("scroll", disableScroll, false);
      // window.addEventListener("touchmove", disableScroll, false);
      // main.style.transform = `translateY(-${latestKnownScroll}px)`;
      // main.dataset["y"] = latestKnownScroll;
    }

  }

  function onScroll() {
    latestKnownScroll = window.scrollY;
    requestTick();
  }

  function onResize() {
    x = w.innerWidth || html.clientWidth || g.clientWidth;
    y = w.innerHeight|| html.clientHeight|| g.clientHeight;
    if (x >= 769) {
      if (html.classList.contains("nav-active")) { html.classList.remove("nav-active"); }
      if (header.classList.contains("headroom")) { headroom.destroy(); }
      window.removeEventListener("scroll", disableScroll, false);
    } else {
      if (!html.classList.contains("nav-active") && !header.classList.contains("headroom"))
      headroom.init();
    }
  }

  function requestTick() {
    if (!ticking) { window.requestAnimationFrame(update); }
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
