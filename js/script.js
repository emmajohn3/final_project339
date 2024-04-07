var slideIndex = 0;
var slides = document.getElementsByClassName("myslides");
var nextButton = document.getElementById("nextButton");

function showSlide(index) {
    // Hide all slides
    for (var i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
        slides[i].classList.remove("slideInLeft", "slideOutRight");
    }

    // Display the current slide and the next slide
    slides[index].style.display = "block";
    slides[index].classList.add("slideInLeft");

}

function nextSlide() {
    slides[slideIndex].classList.remove("slideInLeft");
    slides[slideIndex].classList.add("slideOutRight");

    slideIndex++;
    if (slideIndex >= slides.length) {
        slideIndex = 0; // Restart from the first slide
    }

    setTimeout(function () {
        showSlide(slideIndex);
    }, 1000); // Wait for the flip animation to finish before showing the next slide
}

// Show the initial slide
showSlide(slideIndex);

// Add event listener to the next button
nextButton.addEventListener("click", nextSlide);






