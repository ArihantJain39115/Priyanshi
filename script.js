// script.js
let currentPage = 1;

function goToPage(pageNumber) {
    hideAllPages();
    document.getElementById("page" + pageNumber).style.display = "block";
    currentPage = pageNumber;


}




function hideAllPages() {
    const pages = document.querySelectorAll(".page");
    pages.forEach(page => {
        page.style.display = "none";
    });
}


function checkAnswer() {
    const secretWord = document.getElementById("secretWord").value;

    if (secretWord === "lotus" || secretWord === "Lotus" || secretWord === "LOTUS") {
        goToPage(8);
    } else {
        goToPage(3);
    }


}


// Initialize by showing the first page

goToPage(1);
