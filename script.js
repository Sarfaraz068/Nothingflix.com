
// ========== MOVIE SEARCH ==========

const searchInput = document.getElementById("searchInput");
const searchBtn = document.getElementById("searchBtn");

const movieCards = document.querySelectorAll(".movies-card");
const moviesContainer = document.querySelector(".movies-container");

// Create Movie Not Found message
const notFound = document.createElement("p");
notFound.textContent = "Movie Not Found!";
notFound.classList.add("not-found"); // we can also design using not-fount in css
notFound.style.display = "none"; // display: none  matlab element  webpage par hide karna.

moviesContainer.appendChild(notFound);


// Search Function
/* Function ek aisa block hota hai
 jiske andar hum kuch instructions likhte hain, 
jinhe zarurat padne par execute kar sakte hain.*/

function searchMovies() {

    let searchValue = searchInput.value.toLowerCase().trim();
//Matlab user ka input lena, small letters mein convert karna aur .trim() extra spaces remove karna.
    let found = false;
    //found naam ka variable banaya,initial value false hai.

    movieCards.forEach(function(card) {

        let movieName = card.querySelector("h2").textContent.toLowerCase();

        if (movieName.includes(searchValue) && searchValue !== "") {

            card.style.display = "block";
            found = true;

        } 
        else if (searchValue === "") {

            card.style.display = "block";

        }
        else {

            card.style.display = "none";

        }

    });

    if (searchValue !== "" && !found) {
        notFound.style.display = "block";
    } 
    else {
        notFound.style.display = "none";
    }
}


// Search Button Click
searchBtn.addEventListener("click", searchMovies);

// Search using Enter key
searchInput.addEventListener("keydown", function(event) {

    if (event.key === "Enter") {
        searchMovies();
    }

});


// ========== TYPING ANIMATION ==========

const typingText = document.getElementById("typingText");

const text = "Explore the Marvel Universe";

let index = 0;
let deleting = false;

function typeEffect() {

    if (!deleting) {

        typingText.textContent = text.substring(0, index + 1);
        index++;

        if (index === text.length) {
            deleting = true;
            setTimeout(typeEffect, 1500);
            return;
        }

    } 
    else {

        typingText.textContent = text.substring(0, index - 1);
        index--;

        if (index === 0) {
            deleting = false;
        }

    }

    setTimeout(typeEffect, deleting ? 70 : 120);

}

// Start animation
typeEffect();
