function Vehicle(make, model,year, color){
    this.Vehicle_Make = make;
    this.Vehicle_Model=model;
    this.Vehicle_year = year;
    this.Vehicle_Color = color;
}

var Jack = new Vehicle("Dodge", "Viper", 2020, "Red");
var Emily = new Vehicle ("Jeep", "Trail Hawk", 2019, "White");
var Erick = new Vehicle ("Ford", "Pinto", 1971, "Mustard");

function myFunction(){
    document.getElementById("Keywords_and_Constructors").innerHTML = "Erik drives a " + Erick.Vehicle_Color +
    "-colored " +Erick.Vehicle_Model + " manufactured in " + Erick.Vehicle_year;
}