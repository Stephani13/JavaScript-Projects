function Ride_Function(){
    var Height, Can_Ride;
    Height = document.getElementById("Height").value;
    Can_Ride = (Height < 52) ? "You are too short" : "You are tall enough";
    document.getElementById("Ride").innerHTML = Can_Ride + " to ride";
}


//new and this assignment

function Pet(animal,breed, age, color){ //created a functions pet 
    this.Pet_Animal = animal;
    this.Pet_Breed = breed;
    this.Pet_Age = age;
    this.Pet_Color = color
}


var Jose = new Pet("Dog", "chihuahua", 5, "cream")//assign values
var Veronica = new Pet("Cat", "Siamese", 8, "white and black")
var Ethan = new Pet("Hamster", "Syrian",3,"dark brown")
 

// display results
function my_function(){
    document.getElementById("New_and_This").innerHTML = "Jose has a " + Jose.Pet_Breed + " " + Jose.Pet_Animal + 
    " that is " + Jose.Pet_Age + " years old, color " + Jose.Pet_Color;
}


//nested function assignment
function Nested_Function(){
    document.getElementById("Nested functions").innerHTML = Years();
    function Years(){ //created a year function to calculate the lifespectancy for a cat
        var starting_point = 8 //assign starting point
        function Plus_One(){starting_point += 1;}//add one to the value of the starting point
        Plus_One();
        return starting_point //call the value
        result = 18 - starting_point // do an estimate of how long veronicas cat have left to live
        document.getElementById("lifespan").innerHTML = "Veronica's cat is going to have " + result + " left to live."; //display results
    }

}