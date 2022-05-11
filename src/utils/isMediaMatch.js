function isMediaMatch(maxWidth) {
  return window.matchMedia(`(max-width: ${maxWidth}px)`).matches;
}

export default isMediaMatch;