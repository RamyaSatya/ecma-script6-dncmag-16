//Command to compile this file: traceur --out ES5\functions.js --script ES6\functions.js

(function(){
    //Arrow functions
    var employees = [{name:'Alex',age:33},
        {name:'Ben',age:29},
        {name:'Craig',age:57},
        {name:'Dan',age:27},
        {name:'Ed',age:48}];

    var totalAge = 0;

    employees.forEach(function(emp) {
        totalAge += emp.age;
    });
    console.log("Average age: " + totalAge / employees.length);

    totalAge = 0;

    employees.forEach(emp => {
        totalAge += emp.age;
    });

    console.log("Average age: " + totalAge / employees.length);

    var allAbove30 = employees.every(emp => emp.age >= 30);
    console.log(allAbove30);

    var events = {
        registeredEvents:[],
        register: function(name, handler){
            this.registeredEvents.push({name: name, handler: handler});
        },
        raise: function(name){
            var filtered = this.registeredEvents.filter( e => e.name === name)[0];
            filtered.handler();
        }
    };

    var worker1 = {
        name:'Ravi',
        registerWorkDone: function(){
            var self=this;
            events.register('workDone', function(){
                console.log(self.name + "'s current task is done! Free for new assignment.");
            });
        }
    };

    worker1.registerWorkDone();
    events.raise('workDone');

    var worker2 = {
        name:'Kiran',
        registerWorkDone: function(){
            events.register('workDone2', () => {
                console.log(this.name + "'s current task is done! Free for new assignment.");
            });
        }
    };

    worker2.registerWorkDone();
    events.raise('workDone2');

    //Default Parameters
    function sayHi(name = 'Ravi', place = 'Hyderabad', message = "No additional message for " + name){
        console.log("Hello, " + name +" from " + place + "! (" + message + ")");
    }

    sayHi();
    sayHi('Ram');
    sayHi('Hari','Bengaluru', 'Message from Rani, Bengaluru');
    sayHi(undefined, 'Pune');

    //Rest Parameters
    function addNumbers(...numbers){
        var total = 0;
        numbers.forEach(number => {
            total += number;
        });
        console.log(total);
    }

    addNumbers(20, 10, 72, 38, 28);

    //Spread
    function printPersonDetails(name, place, occupation){
        console.log(name + " works at " + place + " as a/an " + occupation);
    }
    printPersonDetails(...['Ravi', 'Hyderabad', 'Software Professional']);

    var arr = [1, 2, 3];
    var arr2 = [19, 27, 12,...arr, 63, 38];
    console.log(arr2);

}());
