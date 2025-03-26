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

const temples = [
    {
      templeName: "Aba Nigeria",
      location: "Aba, Nigeria",
      dedicated: "2005, August, 7",
      area: 11500,
      imageUrl:
      "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/aba-nigeria/400x250/aba-nigeria-temple-lds-273999-wallpaper.jpg"
    },
    {
      templeName: "Manti Utah",
      location: "Manti, Utah, United States",
      dedicated: "1888, May, 21",
      area: 74792,
      imageUrl:
      "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/manti-utah/400x250/manti-temple-768192-wallpaper.jpg"
    },
    {
      templeName: "Payson Utah",
      location: "Payson, Utah, United States",
      dedicated: "2015, June, 7",
      area: 96630,
      imageUrl:
      "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/payson-utah/400x225/payson-utah-temple-exterior-1416671-wallpaper.jpg"
    },
    {
      templeName: "Yigo Guam",
      location: "Yigo, Guam",
      dedicated: "2020, May, 2",
      area: 6861,
      imageUrl:
      "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/yigo-guam/400x250/yigo_guam_temple_2.jpg"
    },
    {
      templeName: "Washington D.C.",
      location: "Kensington, Maryland, United States",
      dedicated: "1974, November, 19",
      area: 156558,
      imageUrl:
      "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/washington-dc/400x250/washington_dc_temple-exterior-2.jpeg"
    },
    {
      templeName: "Lima Perú",
      location: "Lima, Perú",
      dedicated: "1986, January, 10",
      area: 9600,
      imageUrl:
      "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/lima-peru/400x250/lima-peru-temple-evening-1075606-wallpaper.jpg"
    },
    {
      templeName: "Mexico City Mexico",
      location: "Mexico City, Mexico",
      dedicated: "1983, December, 2",
      area: 116642,
      imageUrl:
      "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/mexico-city-mexico/400x250/mexico-city-temple-exterior-1518361-wallpaper.jpg"
    },
    {
        templeName: "Hamnilton New Zealand",
        location: "Hamilton, New Zealand",
        dedicated: "1958, April, 20-22",
        area: 45251,
        imageUrl:
        "https://churchofjesuschristtemples.org/assets/img/temples/hamilton-new-zealand-temple/hamilton-new-zealand-temple-31316.jpg"
      },
      {
        templeName: "Bern Switzerland",
        location: "Zollikofen, Switzerland",
        dedicated: "1955, September, 11-15",
        area: 35546,
        imageUrl:
        "https://churchofjesuschristtemples.org/assets/img/temples/bern-switzerland-temple/bern-switzerland-temple-54641-main.jpg"
      },
      {
        templeName: "San Diego California",
        location: "San Diego, California",
        dedicated: "1993, April, 25-30",
        area: 72000,
        imageUrl:
        "https://churchofjesuschristtemples.org/assets/img/temples/san-diego-california-temple/san-diego-california-temple-9060-main.jpg"
      },
    // Add more temple objects here...
  ];

createTempleCard(temples);

const homeLink = document.querySelector("#home");
const oldLink = document.querySelector("#old");
const newLink = document.querySelector("#new");
const largeLink = document.querySelector("#large");
const smallLink = document.querySelector("#small");

homeLink.addEventListener("click", () => {
  createTempleCard(temples);
});

oldLink.addEventListener("click", () => {
    const olderTemples = temples.filter(temple => {
        let year = parseInt(temple.dedicated.split(",")[0], 10); 
        return year < 1900;
    });
    createTempleCard(olderTemples); 
});

newLink.addEventListener("click", () => {
  const newerTemples = temples.filter(temple => {
      let year = parseInt(temple.dedicated.split(",")[0], 10); 
      return year > 2000;
  });
  createTempleCard(newerTemples); 
});

largeLink.addEventListener("click", () => {
  const largeTemples = temples.filter(temple => temple.area > 90000);
  
  createTempleCard(largeTemples);
});

smallLink.addEventListener("click", () => {
  const smallTemples = temples.filter(temple => temple.area < 10000);
  
  createTempleCard(smallTemples);
});


function createTempleCard(templesToDisplay) {
    document.querySelector(".container").innerHTML = "";
    console.log("Temples to display:", templesToDisplay);
    templesToDisplay.forEach(temple => {
        let card = document.createElement("section");
        let name = document.createElement("h3");
        let location = document.createElement("p");
        let dedication = document.createElement("p");
        let area = document.createElement("p");
        let img = document.createElement("img");

        name.textContent = temple.templeName;
        location.innerHTML = `<span class="label">Location:</span> ${temple.location}`;
        dedication.innerHTML = `<span class="label">Dedicated:</span> ${temple.dedicated}`;
        area.innerHTML = `<span class="label">Size:</span> ${temple.area} sq ft`;
        img.setAttribute("src", temple.imageUrl);
        img.setAttribute("alt", `${temple.templeName} Temple`);
        img.setAttribute("loading", "lazy");
        img.setAttribute("width", "600");
        img.setAttribute("height", "auto");

        card.appendChild(name);
        card.appendChild(location);
        card.appendChild(dedication);
        card.appendChild(area);
        card.appendChild(img);

        document.querySelector(".container").appendChild(card);
    });
}
