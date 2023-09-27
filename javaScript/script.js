// HTML tugmani elementlarini tanlab olish
var downloadButton = document.querySelector(".Download");
var javascriptDiv = document.querySelector(".javascript");
var javaScriptDownloadButton = document.querySelector(".javaScript_download");
const overlaynam = document.querySelector(".overlay");
const tozalamoq = document.querySelector(".namber");

const menu = document.querySelector(".aside");
const menunam = document.querySelector(".bars");
const cleannam = document.querySelector(".clean");


downloadButton.addEventListener("click", function() {
    javascriptDiv.style.display = "block";
    overlaynam.style.display = "block"
});

overlaynam.addEventListener("click", function() {
    javascriptDiv.style.display = "none";
    overlaynam.style.display = "none"
});
document.addEventListener("keydown", function(event) {
    if (event.key === "Escape") {
        javascriptDiv.style.display = "none";
        overlaynam.style.display = "none"
    }
});

// dowlondagi x 
tozalamoq.addEventListener("click", function() {
    javascriptDiv.style.display = "none";
    overlaynam.style.display = "none"
});

menunam.addEventListener("click", function() {
    menu.style.display = "block";
    overlaynam.style.display = "block"
});

cleannam.addEventListener("click", function() {
    menu.style.display = "none";
    overlaynam.style.display = "none"
});
document.addEventListener("keydown", function(event) {
    if (event.key === "Escape") {
        menu.style.display = "none";
        overlaynam.style.display = "none"
    }
});


// Animatsiya

