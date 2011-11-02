/**
 * HTML5 canvas effect library
 * https://github.com/erhangundogan/massCanvas
 * by Erhan Gundogan <erhan@trposta.net> - http://mass.io/
 */

var MassCanvas = function(canvasID) {
  var self = {};
  var _canvas =
    document.getElementById(canvasID) ||
    document.getElementsByTagName("canvas")[0];

  if (_canvas === undefined) {
    throw {
      type: "NotFound",
      message: "Canvas element not found."
    };
  }

  var _context = _canvas.getContext("2d");

  var _helper = {
    hex2Rgb: function(hex){
      var result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})|([a-f\d]{1})([a-f\d]{1})([a-f\d]{1})$/i.exec(hex);
      return result ? {
        r: parseInt(hex.length <= 4 ? result[4]+result[4] : result[1], 16),
        g: parseInt(hex.length <= 4 ? result[5]+result[5] : result[2], 16),
        b: parseInt(hex.length <= 4 ? result[6]+result[6] : result[3], 16),
        toString: function() {
          var arr = [];
          arr.push(this.r);
          arr.push(this.g);
          arr.push(this.b);
          return "rgb(" + arr.join(",") + ")";
        }
      } : null;
    },
    rgb2Hex: function(r, g, b) {
      return "#" + ((1 << 24) + (r << 16) + (g << 8) + b).toString(16).slice(1);
    },
    isHex: function(item) {
      return /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})|([a-f\d]{1})([a-f\d]{1})([a-f\d]{1})$/i.test(item);
    },
    isRgb: function(item) {
      var arr = [];
      arr.push("rgb\\(");
      arr.push("(25[0-5]|2[0-4][0-9]|1[0-9][0-9]|[1-9][0-9]|[0-9])");
      arr.push(",\\s?");
      arr.push("(25[0-5]|2[0-4][0-9]|1[0-9][0-9]|[1-9][0-9]|[0-9])");
      arr.push(",\\s?");
      arr.push("(25[0-5]|2[0-4][0-9]|1[0-9][0-9]|[1-9][0-9]|[0-9])");
      arr.push("\\)");
      var regExString = arr.join("");
      var regEx = new RegExp(regExString, "i");
      return regEx.test(item);
    },
    add: function(a, b) {
      return a + b;
    },
    sub: function(a, b) {
      return a - b;
    }
  };

  return {
    colorWheel: function(ColorArray, Interval, Loop) {

      var colorArray = ColorArray || [hex2Rgb("#FFF").toString(), hex2Rgb("#000").toString()],
          interval = Interval || 10,
          loop = Loop || false,
          colorStep = .01,
          activeColor = _colorArray.shift();

      function stopInterval(e) {
        clearInterval(intervalFunction);
        if (e !== undefined)
          throw e;
      }

      var transformColor = function(activeColor) {
        
      };

      var intervalFunction = setInterval(
        function(){
          try {
            if (activeColor === undefined) stopInterval();
            activeColor = transformColor(activeColor);
            _context.fillStyle = activeColor;
            _context.fillRect(0, 0, _canvas.width, _canvas.height);
          } catch(e) {
            stopInterval(e);
          }
        }, interval);
    }
  };
};

if (typeof Object.create != 'function') {
  Object.create = function(prototype) {
		var F = function(){};
		F.prototype = prototype;
		var obj = new F();
		return obj;
  };
}