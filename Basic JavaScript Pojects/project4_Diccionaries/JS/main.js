function dictionary_Function(){
    var Flowers = { //creates a dictionary
        Species : "Lilies",//key-value (ensure values are in quotations to prevent errors)
        Solor : "Rose",
        Zone: "perennials",
    };
    delete Flowers.Species;//delete a dictionary element
    document.getElementById("Dictionary").innerHTML = Flowers.Species;
}