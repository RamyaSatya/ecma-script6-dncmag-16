//Command to compile this file: traceur --out ES5\classes.js --script ES6\classes.js

class City{

    constructor(name, country){
        this._name=name;
        this._country=country;
    }

    startDay(){
        return "Good Morning!";
    }

    get name(){
        return this._name;
    }

    set name(value){
        this._name=value;
    }

    get country(){
        return this._country;
    }

    set country(value){
        this._country=value;
    }
}

class MetroCity extends City
{
    constructor(name, country, hasMetroRail)
    {
        super(name, country);
        this._hasMetroRail = hasMetroRail;

    }

    startDay(){
        var m = "Good Morning from Radio 365!";
        m = super.startDay() + "\n" + m;
        return m;
    }
}

let city = new City("Hyderabad", "India");
console.log(city.startDay());
console.log(city.name);
console.log(city.startDay());
city.name="Bengaluru";
console.log(city.name);

let metroCity = new MetroCity("New Delhi", "India", true);
console.log(metroCity.startDay());
