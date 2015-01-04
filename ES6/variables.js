//Command to compile this file: traceur --out ES5\variables.js --script ES6\variables.js

(function() {

    //let
    var numbers = [10, 20, 25, 90, 17, 38, 61];
    var average = 0;

    for (let count = 0; count < numbers.length; count++) {
        average += numbers[count];
    }

    average = average / numbers.length;

    //const
    function getAreaOfCircle(radius) {
        if(radius) {
            const PI = 3.412;

            return PI * radius * radius;
        }
        console.log(PI);
        return 0;
    }

    console.log(getAreaOfCircle(10));
    console.log(getAreaOfCircle());
    //console.log(PI);

    console.log(average);
    console.log(count);

    //destructuring
    var topic = {name:'ECMAScript 6',
                 comment: 'Next version of JavaScript',
                 browserStatus: {
                    chrome: 'partial',
                    opera:'partial',
                    IE: 'none',
                    IETechPreview: 'partial'
                }};
    var {name, comment} = topic;

    var numbers=[20, 30, 40, 50];

    var [first, second, third ] = numbers;
    var [, , fourth, fifth ] = numbers;

    function add({firstNumber, secondNumber}){
        return firstNumber + secondNumber;
    }

    console.log(name);
    console.log(comment);

    console.log(first);
    console.log(second);
    console.log(third);
    console.log(fourth);
    console.log(fifth);

    console.log(add({firstNumber: 94, secondNumber: 19}));
}());
