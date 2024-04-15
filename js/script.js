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

// start second slideshow
var slideIndex2 = 0;
var slides2 = document.getElementsByClassName("myslides2");
var nextButton2 = document.getElementById("nextButton2");

function showSlide2(index) {
    // Hide all slides
    for (var i = 0; i < slides2.length; i++) {
        slides2[i].style.display = "none";
        slides2[i].classList.remove("slideInLeft", "slideOutRight");
    }

    // Display the current slide and the next slide
    slides2[index].style.display = "block";
    slides2[index].classList.add("slideInLeft");

}

function nextSlide2() {
    slides2[slideIndex2].classList.remove("slideInLeft");
    slides2[slideIndex2].classList.add("slideOutRight");

    slideIndex2++;
    if (slideIndex2 >= slides2.length) {
        slideIndex2 = 0; // Restart from the first slide
    }

    setTimeout(function () {
        showSlide2(slideIndex2);
    }, 1000); // Wait for the flip animation to finish before showing the next slide
}

// Show the initial slide
showSlide2(slideIndex2);

// Add event listener to the next button
nextButton2.addEventListener("click", nextSlide2);
// end second slideshow



