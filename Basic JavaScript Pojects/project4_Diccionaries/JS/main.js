function dictionary_Function(){
    var Flowers = {
        Species : "Lilies",
        Solor : "Rose",
        Zone: "perennials",
    };
    delete Flowers.Species;
    document.getElementById("Dictionary").innerHTML = Flowers.Species;
}