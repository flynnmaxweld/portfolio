(function () {
  let hue = 9; // Original red accent starting hue
  function rotateHue() {
    hue = (hue + 0.15) % 360;
    document.documentElement.style.setProperty('--accent-hue', hue);
    requestAnimationFrame(rotateHue);
  }
  requestAnimationFrame(rotateHue);
})();
