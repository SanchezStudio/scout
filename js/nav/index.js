!(function() {
  let html = document.documentElement;
  // let welcome = document.getElementById("welcome");
  let toggle = document.querySelectorAll(".nav__toggle")[0];
  let latestKnownScroll = 0;
  let ticking = false;
  let hero = document.querySelectorAll(".hero");
  var w = window,
      d = document,
      e = d.documentElement,
      g = d.getElementsByTagName('body')[0],
      x = w.innerWidth || e.clientWidth || g.clientWidth,
      y = w.innerHeight|| e.clientHeight|| g.clientHeight;

  function onClick(event) {
    event.preventDefault();
    html.classList.toggle("nav-active");
  }

  function onScroll() {
    latestKnownScroll = window.scrollY;
    requestTick();
  }

  function onResize() {
    if (x >= 768) {
      html.classList.remove("nav-active");
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

    if (hero[0] && latestKnownScroll >= (hero[0].clientHeight * 0.65)){
      html.classList.add('nav-scrolled');
    } else if (!hero[0]) {
      html.classList.add('nav-scrolled');
    } else {
      html.classList.remove('nav-scrolled');
    }
  }

  window.addEventListener('resize', onResize, false);
  window.addEventListener('scroll', onScroll, false);
  toggle.addEventListener("click", onClick, false);

})();
