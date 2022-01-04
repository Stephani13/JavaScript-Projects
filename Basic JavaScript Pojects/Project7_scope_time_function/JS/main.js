x = 10//global variable

function global_variable(){
    result = x + 7;
    var y = 5 //creation of a local variable
    document.getElementById("Global").innerHTML = result;
}

function local(){
    result = y + x//use of both variables created, but local variable could not be used resulting on an error
    document.getElementById("Local").innerHTML = result
    console.log(result)
}


//if statements
function getDate(){
    if (new Date().getHours() < 18){
        document.getElementById("Greet").innerHTML = "How are yo today?;"
    }
}


function myStatement(){
    if (new Date().getDay() < 15){
        document.getElementById("Statement").innerHTML = "How was the start of your month?";
    }
}

//else statements
function ageFunction(){
    Age = document.getElementById("Age").value;//get input value
    if (Age > 18){
        Vote = "You are old enough to vote"
    }
    else {
        Vote = "You are not old enough to vote"
    }
    document.getElementById("How_Old_Are_You?").innerHTML = Vote;
}