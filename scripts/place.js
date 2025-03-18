const year = document.querySelector("#currentyear");

const today = new Date();

year.innerHTML = `<span class="highlight">${today.getFullYear()}</span>`;

const date = document.querySelector("#lastModified");

date.innerHTML = `<p>Last Modified: ${document.lastModified}</p>`

let windSpeed = parseFloat(document.getElementById("wind").textContent);

let temperature = parseFloat(document.getElementById("temp").textContent);



const calculateWindChill = (windSpeed, temperature) => {
    if (windSpeed > 4.8 && temperature <= 10) {
        let windChill = 13.12+(0.6215*temperature) - 11.37 * (windSpeed**0.16) + ((0.3965 * temperature) * windSpeed**0.16)
        let chill = document.getElementById("chill");
        chill.innerHTML = `${windChill.toFixed(1)} C`
    } else {
        chill.innerHTML = "N/A"
    }
}

calculateWindChill(windSpeed, temperature);