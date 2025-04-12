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

const hikesData = [
    {
        id: 1,
        title: "Donut Falls",
        image: "../images/donut-falls.jpg",
        difficulty: "easy",
        location: "northern",
        duration: "short",
        distance: "1.5 miles",
        elevation: "500 ft",
        description: "A family-friendly hike to a unique waterfall that flows through a donut-shaped hole in the rock."
    },
    {
        id: 2,
        title: "Stewart Falls",
        image: "../images/stewart-falls.jpg",
        difficulty: "moderate",
        location: "northern",
        duration: "medium",
        distance: "3.5 miles",
        elevation: "650 ft",
        description: "A scenic hike near Sundance Resort with a spectacular 200-foot waterfall cascading down the mountainside."
    },
    {
        id: 3,
        title: "Lower Calf Creek Falls",
        image: "../images/calf-creek-falls.jpg",
        difficulty: "moderate",
        location: "southern",
        duration: "medium",
        distance: "6 miles",
        elevation: "500 ft",
        description: "A beautiful hike through a desert canyon to a 126-foot waterfall with a refreshing swimming hole."
    },
    {
        id: 4,
        title: "Adams Canyon",
        image: "../images/adams-canyon.jpg",
        difficulty: "moderate",
        location: "northern",
        duration: "medium",
        distance: "3.8 miles",
        elevation: "1,500 ft",
        description: "A popular trail with great views of the Great Salt Lake, culminating in a stunning 40-foot waterfall."
    },
    {
        id: 5,
        title: "Kanarraville Falls",
        image: "../images/kanarraville-falls.jpg",
        difficulty: "moderate",
        location: "southern",
        duration: "medium",
        distance: "4.8 miles",
        elevation: "800 ft",
        description: "A unique slot canyon hike with multiple waterfalls and beautiful red rock scenery."
    },
    {
        id: 6,
        title: "Fifth Water Hot Springs",
        image: "../images/fifth-water.jpg",
        difficulty: "moderate",
        location: "central",
        duration: "medium",
        distance: "4.5 miles",
        elevation: "700 ft",
        description: "A rewarding hike to natural hot springs with a vibrant blue color and a nearby waterfall."
    },
    {
        id: 7,
        title: "Bridal Veil Falls",
        image: "../images/bridal-veil-falls.jpg",
        difficulty: "easy",
        location: "northern",
        duration: "short",
        distance: "1.4 miles",
        elevation: "100 ft",
        description: "An easily accessible double cataract waterfall located in Provo Canyon, perfect for families."
    },
    {
        id: 8,
        title: "Timpanogos Falls",
        image: "../images/timpanogos-falls.jpg",
        difficulty: "difficult",
        location: "northern",
        duration: "long",
        distance: "14 miles",
        elevation: "4,500 ft",
        description: "A challenging hike to the summit of Mount Timpanogos with breathtaking waterfalls along the way."
    },
    {
        id: 9,
        title: "Bell Canyon Waterfall",
        image: "../images/bell-canyon.jpg",
        difficulty: "moderate",
        location: "northern",
        duration: "medium",
        distance: "4.6 miles",
        elevation: "1,500 ft",
        description: "A popular trail in Sandy featuring a reservoir and a beautiful waterfall with mountain views."
    },
    {
        id: 10,
        title: "Emerald Pools",
        image: "../images/emerald-pools.jpg",
        difficulty: "easy",
        location: "southern",
        duration: "short",
        distance: "3 miles",
        elevation: "400 ft",
        description: "A series of pools and waterfalls in Zion National Park, offering spectacular views and easy access."
    },
    {
        id: 11,
        title: "The Grotto Waterfall",
        image: "../images/grotto-waterfall.jpg",
        difficulty: "easy",
        location: "southern",
        duration: "short",
        distance: "0.5 miles",
        elevation: "100 ft",
        description: "A short, easy hike in Zion National Park to a beautiful waterfall located in the Grotto area. Perfect for a quick getaway."
    },
    {
        id: 12,
        title: "Toquerville Falls",
        image: "../images/toquerville-falls.jpg",
        difficulty: "difficult",
        location: "southern",
        duration: "long",
        distance: "8 miles",
        elevation: "1,200 ft",
        description: "A challenging drive or hike to a series of cascading waterfalls with swimming areas."
    },
    {
        id: 13,
        title: "Waterfall Canyon",
        image: "../images/waterfall-canyon.jpg",
        difficulty: "moderate",
        location: "northern",
        duration: "medium",
        distance: "3 miles",
        elevation: "1,000 ft",
        description: "A rewarding hike in Ogden, leading to a beautiful waterfall with great views of the surrounding mountains and the Great Salt Lake."
    },
    {
        id: 14,
        title: "Cecret Lake",
        image: "../images/cecret-lake.jpg",
        difficulty: "easy",
        location: "northern",
        duration: "short",
        distance: "1.5 miles",
        elevation: "500 ft",
        description: "A short and easy hike to Cecret Lake in Little Cottonwood Canyon, where you'll be rewarded with scenic mountain views and a tranquil alpine lake with a small waterfall."
    },
    {
        id: 15,
        title: "Mystic Hot Springs Waterfall",
        image: "../images/mystic-hot-springs.jpg",
        difficulty: "moderate",
        location: "central",
        duration: "medium",
        distance: "4 miles",
        elevation: "800 ft",
        description: "A beautiful hike through a canyon near Mystic Hot Springs, with a scenic waterfall at the end. This hike is perfect for those looking for a peaceful nature escape."
    },
    {
        id: 16,
        title: "Pine Creek Waterfall",
        image: "../images/pine-creek-waterfall.jpg",
        difficulty: "moderate",
        location: "southern",
        duration: "long",
        distance: "5 miles",
        elevation: "1,000 ft",
        description: "A stunning hike in Zion National Park, leading to a hidden waterfall in Pine Creek Canyon, surrounded by dramatic cliffs and lush vegetation."
    },
    {
        id: 17,
        title: "Kanab Creek Waterfall",
        image: "../images/kanab-creek-waterfall.jpg",
        difficulty: "moderate",
        location: "southern",
        duration: "long",
        distance: "4.5 miles",
        elevation: "700 ft",
        description: "A scenic hike through the Kanab Creek area, leading to a picturesque waterfall surrounded by beautiful red rock formations."
    }
];
document.addEventListener("DOMContentLoaded", function() {
    const hikesContainer = document.getElementById("hikes-container");
    const applyFiltersBtn = document.getElementById("apply-filters");
    const resetFiltersBtn = document.getElementById("reset-filters");
    const resultsCount = document.getElementById("results-count");
    
    if (hikesContainer) {
        displayHikes(hikesData);
        
        if (applyFiltersBtn) {
            applyFiltersBtn.addEventListener("click", function() {
                const selectedDifficulties = getSelectedValues("difficulty");
                const selectedLocations = getSelectedValues("location");
                const selectedDurations = getSelectedValues("duration");
                
                const filteredHikes = filterHikes(selectedDifficulties, selectedLocations, selectedDurations);
                displayHikes(filteredHikes);

                if (filteredHikes.length === 1) {
                    resultsCount.textContent = `(1 hike found)`;
                } else {
                    resultsCount.textContent = `(${filteredHikes.length} hikes found)`;
                }
            });
        }
        
        if (resetFiltersBtn) {
            resetFiltersBtn.addEventListener("click", function() {

                const checkboxes = document.querySelectorAll(".filter-checkbox");
                checkboxes.forEach(checkbox => {
                    checkbox.checked = false;
                });

                displayHikes(hikesData);
                resultsCount.textContent = "(Showing all hikes)";
            });
        }
    }
});

function getSelectedValues(filterName) {
    const checkboxes = document.querySelectorAll(`input[name="${filterName}"]:checked`);
    return Array.from(checkboxes).map(cb => cb.value);
}
function filterHikes(difficulties, locations, durations) {
    return hikesData.filter(hike => {
        const difficultyMatch = difficulties.length === 0 || difficulties.includes(hike.difficulty);
        const locationMatch = locations.length === 0 || locations.includes(hike.location);
        const durationMatch = durations.length === 0 || durations.includes(hike.duration);
        
        return difficultyMatch && locationMatch && durationMatch;
    });
}

function displayHikes(hikes) {
    const hikesContainer = document.getElementById("hikes-container");

    hikesContainer.innerHTML = "";
    
    if (hikes.length === 0) {
        hikesContainer.innerHTML = `
            <div class="no-results">
                <p>No hikes match your selected filters. Try adjusting your criteria.</p>
            </div>
        `;
        return;
    }
    
    hikes.forEach(hike => {
        const difficultyClass = `difficulty-${hike.difficulty}`;
        const difficultyText = hike.difficulty.charAt(0).toUpperCase() + hike.difficulty.slice(1);
        
        let locationText = "";
        if (hike.location === "northern") locationText = "Northern Utah";
        else if (hike.location === "central") locationText = "Central Utah";
        else if (hike.location === "southern") locationText = "Southern Utah";
        
        let durationText = "";
        if (hike.duration === "short") durationText = "< 2 hours";
        else if (hike.duration === "medium") durationText = "2-4 hours";
        else if (hike.duration === "long") durationText = "> 4 hours";
        
        const hikeCard = document.createElement("div");
        hikeCard.className = "hike-card";
        hikeCard.innerHTML = `
            <img src="${hike.image}" alt="${hike.title}" class="hike-image">
            <div class="hike-content">
                <span class="difficulty-badge ${difficultyClass}">${difficultyText}</span>
                <h3 class="hike-title">${hike.title}</h3>
                <div class="hike-details">
                    <div class="hike-detail">
                        <img src="../images/location-icon.svg" alt="Location" class="detail-icon">
                        <span>${locationText}</span>
                    </div>
                    <div class="hike-detail">
                        <img src="../images/duration-icon.svg" alt="Duration" class="detail-icon">
                        <span>${durationText}</span>
                    </div>
                    <div class="hike-detail">
                        <img src="../images/distance-icon.svg" alt="Distance" class="detail-icon">
                        <span>${hike.distance}</span>
                    </div>
                    <div class="hike-detail">
                        <img src="../images/elevation-icon.svg" alt="Elevation" class="detail-icon">
                        <span>${hike.elevation}</span>
                    </div>
                </div>
                <p class="hike-description">${hike.description}</p>
            </div>
        `;
        
        hikesContainer.appendChild(hikeCard);
    });
}