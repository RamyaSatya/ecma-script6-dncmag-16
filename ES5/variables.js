(function() {
  var numbers = [10, 20, 25, 90, 17, 38, 61];
  var average = 0;
  for (var count = 0; count < numbers.length; count++) {
    average += numbers[count];
  }
  average = average / numbers.length;
  function getAreaOfCircle(radius) {
    if (radius) {
      var PI = 3.412;
      return PI * radius * radius;
    }
    console.log(PI);
    return 0;
  }
  console.log(getAreaOfCircle(10));
  console.log(getAreaOfCircle());
  console.log(average);
  console.log(count);
  var topic = {
    name: 'ECMAScript 6',
    comment: 'Next version of JavaScript',
    browserStatus: {
      chrome: 'partial',
      opera: 'partial',
      IE: 'none',
      IETechPreview: 'partial'
    }
  };
  var $__0 = topic,
      name = $__0.name,
      comment = $__0.comment;
  var numbers = [20, 30, 40, 50];
  var $__1 = numbers,
      first = $__1[0],
      second = $__1[1],
      third = $__1[2];
  var $__2 = numbers,
      fourth = $__2[2],
      fifth = $__2[3];
  function add($__3) {
    var $__4 = $__3,
        firstNumber = $__4.firstNumber,
        secondNumber = $__4.secondNumber;
    return firstNumber + secondNumber;
  }
  console.log(name);
  console.log(comment);
  console.log(first + "  " + second + "  " + third);
  console.log(fourth + "  " + fifth);
  console.log(add({
    firstNumber: 94,
    secondNumber: 19
  }));
}());
