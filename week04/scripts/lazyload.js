const year = document.querySelector("#currentyear");

const today = new Date();

year.innerHTML = `<span class="highlight">${today.getFullYear()}</span>`;

const date = document.querySelector("#lastModified");

date.innerHTML = `<p>Last Modified: ${document.lastModified}</p>`

const hamburgerBtn = document.getElementById('hamburger-btn');
const navLinks = document.getElementById('nav-links');

hamburgerBtn.addEventListener("click", () => {
    navLinks.classList.toggle('active');
    if (navLinks.classList.contains('active')) {
        hamburgerBtn.innerHTML = '&#10006;';
    } else {
        hamburgerBtn.innerHTML = '&#9776;';
    }  
});