(function() {
  var $__2;
  var Shelf = function Shelf() {
    "use strict";
    this.books = [];
  };
  ($traceurRuntime.createClass)(Shelf, ($__2 = {}, Object.defineProperty($__2, "addBooks", {
    value: function() {
      "use strict";
      for (var bookNames = [],
          $__7 = 0; $__7 < arguments.length; $__7++)
        bookNames[$__7] = arguments[$__7];
      var $__0 = this;
      bookNames.forEach((function(name) {
        $__0.books.push(name);
      }));
    },
    configurable: true,
    enumerable: true,
    writable: true
  }), Object.defineProperty($__2, Symbol.iterator, {
    value: $traceurRuntime.initGeneratorFunction(function $__8() {
      var i;
      return $traceurRuntime.createGeneratorInstance(function($ctx) {
        while (true)
          switch ($ctx.state) {
            case 0:
              "use strict";
              $ctx.state = 9;
              break;
            case 9:
              i = 0;
              $ctx.state = 7;
              break;
            case 7:
              $ctx.state = (i < this.books.length) ? 1 : -2;
              break;
            case 4:
              i++;
              $ctx.state = 7;
              break;
            case 1:
              $ctx.state = 2;
              return this.books[i];
            case 2:
              $ctx.maybeThrow();
              $ctx.state = 4;
              break;
            default:
              return $ctx.end();
          }
      }, $__8, this);
    }),
    configurable: true,
    enumerable: true,
    writable: true
  }), $__2), {});
  var sum = 0;
  var numbers = [10, 20, 30, 40, 50];
  var iterator = numbers.values();
  var nextNumber = iterator.next();
  while (!nextNumber.done) {
    sum += nextNumber.value;
    nextNumber = iterator.next();
    console.log(nextNumber);
  }
  console.log(sum);
  sum = 0;
  for (var $__3 = numbers[$traceurRuntime.toProperty(Symbol.iterator)](),
      $__4; !($__4 = $__3.next()).done; ) {
    var n = $__4.value;
    {
      sum += n;
    }
  }
  console.log(sum);
  var shelf = new Shelf();
  shelf.addBooks('Programming ASP.NET MVC 5', 'Getting lost in JavaScript', 'AngularJS in Action', 'C# 6: What\'s new in the language');
  for (var $__5 = shelf[$traceurRuntime.toProperty(Symbol.iterator)](),
      $__6; !($__6 = $__5.next()).done; ) {
    var book = $__6.value;
    {
      console.log(book);
    }
  }
}());
