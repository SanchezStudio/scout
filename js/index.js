require('smoothscroll-polyfill').polyfill();
import AOS from 'aos';
import './nav';
import './home';
import './gallery';
import './listings';
AOS.init();

window.addEventListener("load", function() {
  AOS.refresh();
}, false);
