let toggleView = document.getElementById("view");
let viewDescription = document.getElementById("view_description");

toggleView.addEventListener("click", function() {
    if (viewDescription.style.display === "none") {
        viewDescription.style.display = "block";
    } else {
        viewDescription.style.display = "none";
    }
});

let toggleHotel = document.getElementById("hotel");
let hotelDescription = document.getElementById("hotel_description");

toggleHotel.addEventListener("click", function() {
    if (hotelDescription.style.display === "none") {
        hotelDescription.style.display = "block";
    } else {
        hotelDescription.style.display = "none";
    }
});

let toggleMeal = document.getElementById("meal");
let mealDescription = document.getElementById("meal_description");

toggleMeal.addEventListener("click", function() {
    if (mealDescription.style.display === "none") {
        mealDescription.style.display = "block";
    } else {
        mealDescription.style.display = "none";
    }
});

let toggleChurch = document.getElementById("church");
let churchDescription = document.getElementById("church_description");

toggleChurch.addEventListener("click", function() {
    if (churchDescription.style.display === "none") {
        churchDescription.style.display = "block";
    } else {
        churchDescription.style.display = "none";
    }
});