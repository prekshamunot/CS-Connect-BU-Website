var slideIndex = 1;

window.onload = function () {
    showSlides(1);
};

window.onscroll = function () {
    scrollFunction()
};

function openNav() {
    document.getElementById("mySidebar").style.width = "250px";
    document.getElementById("wrapper").style.marginLeft = "250px";
}

function closeNav() {
    document.getElementById("mySidebar").style.width = "0";
    document.getElementById("wrapper").style.marginLeft = "0";
}


function showSlides(n) {
    var i;
    var slides = document.getElementsByClassName("mySlides");
    var dots = document.getElementsByClassName("dot");
    console.log(slides.length)
    if (n > slides.length) {
        slideIndex = 1
    }
    if (n < 1) {
        console.log("true")
        slideIndex = slides.length
    }
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
    }
    slides[slideIndex - 1].style.display = "block";
    dots[slideIndex - 1].className += " active";
}

function plusSlides(n) {
    showSlides(slideIndex += n);
}

function currentSlide(n) {
    showSlides(slideIndex = n);
}

function scrollFunction() {
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        document.getElementById("topBtn").style.display = "block";
    } else {
        document.getElementById("topBtn").style.display = "none";
    }
}

function topFunction() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
}

function addSuggestion() {
    var input = document.getElementById("suggest").value;
    var suggestions = [];
    if (input === '') {
        alert("Invalid input!");
    } else {
        suggestions.push(input);
    }
    document.getElementById("suggest").value = "";
}

function openChat() {
    document.getElementById("eBoardchat").style.display = "block";
}

function closeChat() {
    document.getElementById("eBoardchat").style.display = "none";
}