if (window.matchMedia("(min-width: 37.5em)").matches) {
// načte obrázky
  var lazy = Utils.q('[data-src]');
  for (var i = 0; i < lazy.length; i++) {
    var source = lazy[i].getAttribute('data-src');
    // vytvoří obrázek
    var img = new Image();
    img.src = source;
    // vloží ho do odkazu
    lazy[i].insertBefore(img, lazy[i].firstChild);
  }
}





