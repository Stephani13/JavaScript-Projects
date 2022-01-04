function timeFunction(){
    var Time = new Date().getHours();
    var Reply;
    if (Time < 12 == Time > 0){
        Reply = "This is morning time"
    }
    else if (Time > 12 == Time < 18){
        Reply = "This is afternoon time"
    }
    else {
        Reply = "This is evening time";
    }
    document.getElementById("Time_Of_Day").innerHTML = Reply;
}