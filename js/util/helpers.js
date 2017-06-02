export function prefix (obj, prop, value) {
  let prefs = ['webkit', 'Moz', 'O', 'ms'];
  for (let pref in prefs) {
    if ({}.hasOwnProperty.call(prefs, pref)) {
      obj[prefs[pref] + prop] = value;
    }
  }
}

// ------------------------------------
// http://stackoverflow.com/questions/136617/how-do-i-programatically-force-an-onchange-event-on-an-input
// ------------------------------------
export function procEvent(element, eventType) {
  // function to fire event on an element
  let event = new Event(eventType);
  element.dispatchEvent(event);
}

export function addcss(css){
  let head = document.getElementsByTagName('head')[0];
  let s = document.createElement('style');
  s.setAttribute('type', 'text/css');
  if (s.styleSheet) {   // IE
    s.styleSheet.cssText = css;
  } else {                // the world
    s.appendChild(document.createTextNode(css));
  }
  head.appendChild(s);
}
