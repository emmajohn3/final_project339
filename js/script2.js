// start third slideshow
var slideIndex3 = 0;
var slides3 = document.getElementsByClassName("myslides3");
var nextButton3 = document.getElementById("nextButton3");

function showSlide3(index) {
    // Hide all slides
    for (var i = 0; i < slides3.length; i++) {
        slides3[i].style.display = "none";
        slides3[i].classList.remove("slideInLeft", "slideOutRight");
    }

    // Display the current slide and the next slide
    slides3[index].style.display = "block";
    slides3[index].classList.add("slideInLeft");

}

function nextSlide3() {
    slides3[slideIndex3].classList.remove("slideInLeft");
    slides3[slideIndex3].classList.add("slideOutRight");

    slideIndex3++;
    if (slideIndex3 >= slides3.length) {
        slideIndex3 = 0; // Restart from the first slide
    }

    setTimeout(function () {
        showSlide3(slideIndex3);
    }, 1000); // Wait for the flip animation to finish before showing the next slide
}

// Show the initial slide
showSlide3(slideIndex3);

// Add event listener to the next button
nextButton3.addEventListener("click", nextSlide3);
// end third slideshow