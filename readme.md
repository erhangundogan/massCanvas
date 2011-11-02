MassCanvas
==========
HTML5 canvas & javascript featured effect library.

Usage
-----
``` javascript
// Constructor
var mass = Object.create(MassCanvas("canvasID"));

// colorWheel(colorArray, interval, loop)
// Arguments:
//   colorArray: array of strings. Each item hex color definition 3/6 digits.
//   interval: int. Color transition animation frame rate.
//   loop: boolean. If true color transition loops forever.
mass.colorWheel(["#F00", "ca0", "336699", "#feb", "#102030"], 10, true);
```

Author
------

**Erhan Gundogan**

+ http://twitter.com/erhangundogan
+ http://github.com/erhangundogan
+ http://mass.io


License
---------------------

Copyright 2011 Erhan Gundogan

Licensed under the MIT License.