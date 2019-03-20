const $deployedPictureLink = document.querySelector("#deployed-link-picture");
const $deployedHeaderLink = document.querySelector("#deployed-link-heading");
const $githubLink = document.querySelector("#github-link");
const $projectImage = document.querySelector("#project-image");
const $projectName = document.querySelector("#project-name");
const $projectDescription = document.querySelector("#project-description");

const $leftArrow = document.querySelector("#left-arrow"); 
const $rightArrow = document.querySelector("#right-arrow");

const deployedLinks = [
  "https://pages.git.generalassemb.ly/OneilCampbell/Space-Runner/",
  "https://ladybird-app.herokuapp.com/",
  "https://mystifying-bardeen-decc3c.netlify.com"
];

const githubLinks = [
  "https://git.generalassemb.ly/OneilCampbell/Space-Runner",
  "https://git.generalassemb.ly/brianogilvie/ladybird",
  "#"
];

const projectNames = ["Space Runner", "Ladybird", "Galactic Defender"];

const projectDescriptions = [
    "Side scrolling game where the player must avoid asteroids and collect items for points. For every asteroid the player collides with, they suffer an amount of damage indicated onscreen. If the player collides with too many asteroids then they lose.Alternatively, if the player reaches 1000 points, then they win the game.",
    "Collaboration with other developers and a UX team to re-design and revamp a restaurant's promotional website. Implemented a single page scrolling design with sticky navigation, and a database to store all information on the menu items so that they can be dynamically rendered. Includes secure, non-client-facing sign in for the chef to update the menu",
    "Promotional website for an online game, where the user is immersed into an engaging experience as they explore the lore of the game. The user is presented with the history in the world of the game, as well as the setup to the plot of the game. Then the user is introduced to all of the characters, both heroes and villains and invited to join the fight"
];

const projectClasses = ["space-runner-image", "ladybird-image", "galactic-defender-image"];

let prevIndex;
let currentIndex = 0;

const updateInfo = () => {
    $deployedPictureLink.href = $deployedHeaderLink.href = deployedLinks[currentIndex];
    $githubLink.href = githubLinks[currentIndex];
    $projectImage.classList.remove(projectClasses[prevIndex]);
    $projectImage.classList.add(projectClasses[currentIndex]);
    $projectName.innerHTML = projectNames[currentIndex];
    $projectDescription.innerHTML = projectDescriptions[currentIndex]
}

$leftArrow.addEventListener("click", () => {
    prevIndex = currentIndex;
    currentIndex = currentIndex === 0 ? projectNames.length - 1 : currentIndex - 1;
    updateInfo();
})

$rightArrow.addEventListener("click", () => {
    prevIndex = currentIndex;
    currentIndex = currentIndex === projectNames.length - 1 ? 0 : currentIndex + 1;
    updateInfo();    
})