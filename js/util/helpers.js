export function prefix (obj, prop, value) {
  let prefs = ['webkit', 'Moz', 'O', 'ms'];
  for (let pref in prefs) {
    if ({}.hasOwnProperty.call(prefs, pref)) {
      obj[prefs[pref] + prop] = value;
    }
  }
}
