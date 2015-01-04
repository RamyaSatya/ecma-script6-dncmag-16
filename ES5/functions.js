(function() {
  var employees = [{
    name: 'Alex',
    age: 33
  }, {
    name: 'Ben',
    age: 29
  }, {
    name: 'Craig',
    age: 57
  }, {
    name: 'Dan',
    age: 27
  }, {
    name: 'Ed',
    age: 48
  }];
  var totalAge = 0;
  employees.forEach(function(emp) {
    totalAge += emp.age;
  });
  console.log("Average age: " + totalAge / employees.length);
  totalAge = 0;
  employees.forEach((function(emp) {
    totalAge += emp.age;
  }));
  console.log("Average age: " + totalAge / employees.length);
  var allAbove30 = employees.every((function(emp) {
    return emp.age >= 30;
  }));
  console.log(allAbove30);
  var events = {
    registeredEvents: [],
    register: function(name, handler) {
      this.registeredEvents.push({
        name: name,
        handler: handler
      });
    },
    raise: function(name) {
      var filtered = this.registeredEvents.filter((function(e) {
        return e.name === name;
      }))[0];
      filtered.handler();
    }
  };
  var worker1 = {
    name: 'Ravi',
    registerWorkDone: function() {
      var self = this;
      events.register('workDone', function() {
        console.log(self.name + "'s current task is done! Free for new assignment.");
      });
    }
  };
  worker1.registerWorkDone();
  events.raise('workDone');
  var worker2 = {
    name: 'Kiran',
    registerWorkDone: function() {
      var $__0 = this;
      events.register('workDone2', (function() {
        console.log($__0.name + "'s current task is done! Free for new assignment.");
      }));
    }
  };
  worker2.registerWorkDone();
  events.raise('workDone2');
  function sayHi() {
    var name = arguments[0] !== (void 0) ? arguments[0] : 'Ravi';
    var place = arguments[1] !== (void 0) ? arguments[1] : 'Hyderabad';
    var message = arguments[2] !== (void 0) ? arguments[2] : "No additional message for " + name;
    console.log("Hello, " + name + " from " + place + "! (" + message + ")");
  }
  sayHi();
  sayHi('Ram');
  sayHi('Hari', 'Bengaluru', 'Message from Rani, Bengaluru');
  sayHi(undefined, 'Pune');
  function addNumbers() {
    for (var numbers = [],
        $__1 = 0; $__1 < arguments.length; $__1++)
      numbers[$__1] = arguments[$__1];
    var total = 0;
    numbers.forEach((function(number) {
      total += number;
    }));
    console.log(total);
  }
  addNumbers(20, 10, 72, 38, 28);
  function printPersonDetails(name, place, occupation) {
    console.log(name + " works at " + place + " as a/an " + occupation);
  }
  printPersonDetails.apply(null, $traceurRuntime.spread(['Ravi', 'Hyderabad', 'Software Professional']));
  var arr = [1, 2, 3];
  var arr2 = $traceurRuntime.spread([19, 27, 12], arr, [63, 38]);
  console.log(arr2);
}());
