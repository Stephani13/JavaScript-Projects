function mySentence(){
    var part1 = " I went"
    var part2= " to the store to"
    var part3 = " buy some"
    var part4 = " milk"
    var sentence = part1.concat(part2,part3,part4)//put all sentences together
    document.getElementById("Concatenate").innerHTML = sentence //display the result
}


function Slice_Function(){
    var sentence = "The sun goes in hiding to give pass to the night, which envolves the moon making it brighter"
    var Section = sentence.slice(4,7);
    document.getElementById("Slice").innerHTML = Section
}

function Upper(){
    var sentence = "Hello, World!"
    var upper_case = sentence.toUpperCase();
    var number = 180
    var presicion = 1089.5546392
    let result = number.valueOf()
    document.getElementById("UpperCase").innerHTML = upper_case + number.toString() + " " + presicion.toPrecision(5) + 
    " " + number.toFixed() + " " + result;
    //convert a number to string, put presicion on a number 
}