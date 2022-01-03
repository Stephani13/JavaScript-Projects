function adition_Function(){
    var adition = 2 + 2;
    document.getElementById("Math").innerHTML= "2 + 2 = " + adition;
}


function substraction(){
    var subtract = 5 - 2;
    document.getElementById("Sub").innerHTML= "5 - 2 = " + subtract;
}

function multiplication(){
    var multiply = 2 * 2;
    document.getElementById("Mult").innerHTML= "2 * 2 = " + multiply;
}

function division(){
    var divide = 2/2;
    document.getElementById("Div").innerHTML= "2 / 2 = " + divide;
}


function All_Function(){
    var operation = (2 + 2) *5 / 2-5;
    document.getElementById("All").innerHTML= "The answer to (2 + 2) *5 / 2-5 is " + operation;
}

function modulus_Function(){
    var modulus = 28 % 8;
    document.getElementById("Reminder").innerHTML= " The reminder of dividing 28 by 8 is " + modulus;
}

function negative_Operator(){
    var y = 20;
    document.getElementById("Negative").innerHTML= "The nengative operator of 20 is " + -y;
}


function increment_Function(){
    var x=8;
    x++;
    document.getElementById("Increment").innerHTML= x;
}


function decrement_Function(){
    var y=8;
    y--;
    document.getElementById("Decrement").innerHTML= y;
}


window.alert(Math.random() * 100)


document.write(Math.PI)
