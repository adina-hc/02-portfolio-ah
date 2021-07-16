// Initialize Materialize
M.AutoInit();

// Defining variables for the links
const hPsShtr = "https://desolate-tundra-25750.herokuapp.com/";
const sAlmnc = "https://adina-hc.github.io/sports-almanac/";
const wApp = "https://adina-hc.github.io/06-weather-dashboard/";
const cTst = "https://adina-hc.github.io/04-coding-assessment/";

// Query selector's for event listeners
const happyPetsEl = document.getElementbyID("happyPets");
const sportsAlmanacEl = document.getElementById("sportsAlmanac");
const weatherAppEl = document.getElementById("weatherApp");
const codingTestEl = document.getElementById("codingTest");

// Create event listeners for each image to go to the website

happyPetsEl.addEventListener("click", () => {
  window.open(hPsShtr, "_blank", "height=800px, width=1000px");
});

sportsAlmanacEl.addEventListener("click", () => {
  window.open(sAlmnc, "_blank", "height=800px, width=1000px");
});

weatherAppEl.addEventListener("click", () => {
  window.open(wApp, "_blank", "height=800px, width=1000px");
});

codingTestEl.addEventListener("click", () => {
  window.open(cTst, "_blank", "height=800px, width=1000px");
});