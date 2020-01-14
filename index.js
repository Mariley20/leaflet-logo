// a simple control to display a logo in the corner of the map, with some neat interactive behavior
// in Leaflet tradition, a shortcut method is also provided, so you may use either version:
//     new L.Control.Logo(options)
//     L.control.logo(options)
var L = require('leaflet')
require('./leaflet-logo.css')

L.Control.Logo = L.Control.extend({
  options: {
    position: 'topleft',
    height: '50px',
    width: '50px',
    target: '_self'
  },
  initialize: function (options) {
    if (!options.link) throw "L.Control.Logo missing required option: link";
    if (!options.image) throw "L.Control.Logo missing required option: image";
    L.setOptions(this, options);
  },
  onAdd: function (map) {
    this._map = map;

    // create our container, and set the background image
    var container = L.DomUtil.create('div', 'leaflet-logo-control', container);
    container.style.backgroundImage = 'url(' + this.options.image + ')';
    container.style.backgroundRepeat = 'no-repeat';
    container.style.paddingRight = this.options.width;
    container.style.height = this.options.height;

    // generate the hyperlink to the left-hand side
    var link = L.DomUtil.create('a', '', container);
    link.target = this.options.target;
    link.href = this.options.link;

    // create a linkage between this control and the hyperlink bit, since we will be toggling CSS for that hyperlink section
    container.link = link;

    // clicking the control (the image bit) expands the left-hand hyperlink/text bit
    L.DomEvent
      .addListener(container, 'mousedown', L.DomEvent.stopPropagation)
      .addListener(container, 'click', L.DomEvent.stopPropagation)
      .addListener(container, 'dblclick', L.DomEvent.stopPropagation)
      .addListener(container, 'click', function () {
        window.open(link.href, link.target);
      });

    return container;
  }
});

Logo = function (options) {
  return new L.Control.Logo(options);
};

module.exports = Logo