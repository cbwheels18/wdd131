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

const products = [
    {
      id: "fc-1888",
      name: "flux capacitor",
      averagerating: 4.5
    },
    {
      id: "fc-2050",
      name: "power laces",
      averagerating: 4.7
    },
    {
      id: "fs-1987",
      name: "time circuits",
      averagerating: 3.5
    },
    {
      id: "ac-2000",
      name: "low voltage reactor",
      averagerating: 3.9
    },
    {
      id: "jj-1969",
      name: "warp equalizer",
      averagerating: 5.0
    }
  ];

const productSelect = document.getElementById('product-name');

products.forEach(product => {
    const option = document.createElement('option');
    option.value = product.id;
    option.textContent = product.name;
    productSelect.appendChild(option);
});

function incrementReviewCount() {
    let reviewCount = localStorage.getItem('reviewCount');
    if (!reviewCount) {
        reviewCount = 0;
    }
    reviewCount = parseInt(reviewCount) + 1;
    localStorage.setItem('reviewCount', reviewCount); 
}

window.addEventListener('load', () => {
    let reviewCount = localStorage.getItem('reviewCount');
    if (!reviewCount) {
        reviewCount = 0;
    }
    const reviewCountDisplay = document.getElementById('review-count');
    if (reviewCountDisplay) {
        reviewCountDisplay.textContent = `Number of reviews completed: ${reviewCount}`;
    }
});

const form = document.querySelector('form');
if (form) {
    form.addEventListener('submit', (event) => {
        event.preventDefault(); 
        incrementReviewCount(); 
        window.location.href = "review.html";
    });
}