!(function() {
  //document.cookie = 'cross-site-cookie=https://files.sanchezstudio.co; SameSite=None; Secure';
  let home = document.getElementById('home');

  if (home) {
    const video = document.querySelector("video");
    let w = window,
        d = document,
        html = d.documentElement,
        g = d.getElementsByTagName('body')[0],
        x = w.innerWidth || html.clientWidth || g.clientWidth;


    // https://stackoverflow.com/questions/7192098/adding-sources-to-html5-video-in-javascript
    let addSourceToVideo = function(element, src) {
      let source = document.createElement('source');
      source.src = src;
      element.appendChild(source);
    }

    let update = function() {
      console.log("update");
      if (html.classList.contains("no-touch") && x > 768 && video.children.length === 1) {
        addSourceToVideo(video, "https://files.calebmichaelsanchez.com/HeaderVideoV1.mp4");
        addSourceToVideo(video, "https://files.calebmichaelsanchez.com/HeaderVideoV1.webm");
        console.log("its running");
      }
    }

    console.log("inside home");

    let onResize = function() {
      x = w.innerWidth || html.clientWidth || g.clientWidth
      update();
    }

    update();

    w.addEventListener("resize", onResize, false);
  }
})();
