function Call_Loop() {
    var Count = "";
    var X = 1;
   
    while (X < 11) {
        Count += "<br>" + X;
        X++
    }
    document.getElementById("Loop").innerHTML = Count
    
}

function length() {

    var text =  "Today is a good day"
    document.getElementById("Text").innerHTML = text.length;//length of text variable
}

let Fruits = ["apple", "pear", "mango", "orange", "strawberry"]; //array creation , global variable
var content = "";
var Y;

function forLoop() {
    for (Y = 0; Y < Fruits.length; Y++) { //for loop
        content += Fruits[Y] + "<br>";
    }
    document.getElementById("List").innerHTML = content;
}


function arrayFunction(){
    var Picture = [] //array cretion
    Picture[0] = "sky";//array values
    Picture[1]="beach";
    Picture[2] = "forest";
    Picture[3] = "cat";

    document.getElementById("Array").innerHTML = "This is a " + Picture[2] + " picture";
}

function constantFunction(){
    const Food = {type: "italian" , name: "Pizza", location: "Sarasota"} ;//creation of a constant object
    Food.price = "12"
    Food.size = "medium";//added a value
    document.getElementById("Constant").innerHTML = "Today we got an " + Food.type + " " + Food.name + " of " + Food.size + " size, for " + Food.price;
}

//creating an object
function Object_Function(){
    let car = {
        make : "Honda",
        model : "Pilot",
        year : "2007",
        color : "black",
    
    }
    document.getElementById("Object").innerHTML = "This is a " + car.year + " " + car.make + " " + car.model;
}