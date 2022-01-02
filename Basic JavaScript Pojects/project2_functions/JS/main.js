function my_First_Function() {
    var str="This text is in red"; //variable that assigns a value to str
    var result= str.fontcolor("red"); //assigns a color to str
    document.getElementById("Red_Text").innerHTML = result;
}

function my_Function(){
    var sentece="this sentence is"; //this creates a variable
    sentece += " concatenated."; //operator that concatenates a string
    document.getElementById("concatenate").innerHTML = sentece;
}