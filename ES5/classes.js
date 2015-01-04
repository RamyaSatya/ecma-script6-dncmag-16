var City = function City(name, country) {
  "use strict";
  this._name = name;
  this._country = country;
};
($traceurRuntime.createClass)(City, {
  startDay: function() {
    "use strict";
    return "Good Morning!";
  },
  get name() {
    "use strict";
    return this._name;
  },
  set name(value) {
    "use strict";
    this._name = value;
  },
  get country() {
    "use strict";
    return this._country;
  },
  set country(value) {
    "use strict";
    this._country = value;
  }
}, {});
var MetroCity = function MetroCity(name, country, hasMetroRail) {
  "use strict";
  $traceurRuntime.superConstructor($MetroCity).call(this, name, country);
  this._hasMetroRail = hasMetroRail;
};
var $MetroCity = MetroCity;
($traceurRuntime.createClass)(MetroCity, {startDay: function() {
    "use strict";
    var m = "Good Morning from Radio 365!";
    m = $traceurRuntime.superGet(this, $MetroCity.prototype, "startDay").call(this) + "\n" + m;
    return m;
  }}, {}, City);
var city = new City("Hyderabad", "India");
console.log(city.startDay());
console.log(city.name);
console.log(city.startDay());
city.name = "Bengaluru";
console.log(city.name);
var metroCity = new MetroCity("New Delhi", "India", true);
console.log(metroCity.startDay());
var obj = {someFunction: function() {
    return "some value.....";
  }};
