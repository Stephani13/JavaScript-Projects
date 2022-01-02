function my_First_Function() {
    var str="This text is in red";
    var result= str.fontcolor("red");
    document.getElementById("Red_Text").innerHTML = result;
}

function my_Function(){
    var sentece="this sentence is";
    sentece += " concatenated.";
    document.getElementById("concatenate").innerHTML = sentece;
}