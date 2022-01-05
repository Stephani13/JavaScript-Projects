var Index = 1;
showSlides(Index);

function plusSlides(n){
    showSlides(Index += n)
}

function currentSlide(n) {
    showSlides(Index = n);
}

function showSlides(n){
    var i;
    var slide = document.getElementsByClassName("slides");
    var dots = document.getElementsByClassName("dot");
    if (n > slide.length){Index = 1}
    if(n < 1){Index = slide.length}
    for (i =0; i < slide.length; i++){
        slide[i].style.display = "none"
    }

    for (i = 0; i < dots.length; i++){
        dots[i].className = dots[i].className.replace("active", "")
    }

    slide[Index-1].style.display = "block";
    dots[Index-1].className += " active";
}