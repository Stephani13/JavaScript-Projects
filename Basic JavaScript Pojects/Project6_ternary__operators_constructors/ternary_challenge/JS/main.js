function Vote_Function(){
    var Age, Can_Vote;
    Age = document.getElementById("Age").ariaValueMax;
    Can_Vote = (Age > 18) ? "You are old enough": "You are too young";
    document.getElementById("Vote").innerHTML = Can_Vote + " to vote";
}