window.addEventListener("DOMContentLoaded", function(e) {
    console.log("The page is loaded.")
    let btn = document.querySelector("#desktop");
    btn.addEventListener("click", function(e) {
        console.log("The button was clicked");
    });
});