
const deployedLinks = [
  "https://combat-colosseum.herokuapp.com/",
  "https://pages.git.generalassemb.ly/OneilCampbell/Space-Runner/",
  "https://ladybird-app.herokuapp.com/",
  "hushed-structure.surge.sh",
  "https://mystifying-bardeen-decc3c.netlify.com"
];

const githubLinks = [
  "https://github.com/OneilCampbell/Combat-Colosseum",
  "https://github.com/OneilCampbell/Space-Runner",
  "https://github.com/OneilCampbell/Ladybird",
  "https://github.com/OneilCampbell/The-More-You-Know",
  "https://github.com/OneilCampbell/Galactic-Defender"
];

const projectNames = ["Combat Colosseum", "Space Runner", "Ladybird", "The More You Know", "Galactic Defender"];

const projectImages = [
  "./Assets/Images/combat-colosseum/combat-colosseum.png",
  "./Assets/Images/space-runner/space-runner-1.png", 
  "./Assets/Images/ladybird/ladybird-1.png", 
  "./Assets/images/the-more-you-know/the-more-you-know.png",
  "./Assets/Images/galactic-defender/galactic-defender1.png"
];

const projectDescriptions = [
  "Arcade style fighting game, where the player can choose from a variety of characters and see how long they can last in the arena.",
  "2D Side scrolling game where the player must navigate a spaceship to avoid asteroids and collect different kinds of items for points.",
  "Collaboration with fellow developers and a team of UX designers to revamp and re-design a NYC restaurant's promotional website.",
  "Trivia game where players can guess the answers to random bits of trivia, guess the punchline to jokes, or match a flag to its country",
  "Promotional website for an online game, where the user is immersed into an engaging experience as they explore the lore of the game."
];

const projectTech = ["React-Router, Express, Sequelize, PostgreSQL", "HTML, CSS, JavaScript, jQuery", "React, Express, Sequelize, PostgreSQL", "React, Javascript, APIs, Axios", "HTML, CSS, JavaScript, jQuery"];


let currentIndex = 0;

const elementsCreation = (elemnt, clss) => {
  let tempElm = document.createElement(elemnt);
  tempElm.classList.add(clss);
  return tempElm;
}

const appendChildren = (parent, children) => {
  for(child of children){
    parent.appendChild(child);
  }
}

const handleCardFront = cardFront => {
  let title = elementsCreation("h3", "project-title");
  title.innerHTML = projectNames[currentIndex];
  let image = elementsCreation("img", "project-image");
  image.src = projectImages[currentIndex];
  let techUsed = elementsCreation("p", "project-tech");
  techUsed.innerHTML = projectTech[currentIndex];
  appendChildren(cardFront, [title, image, techUsed]);
}

const handleCardBack = cardBack => {
  let descr = elementsCreation("p", "project-description");
  descr.innerHTML = projectDescriptions[currentIndex];

  let button = elementsCreation("div", "project-button");
  let git = elementsCreation("a", "project-link");
  git.href = githubLinks[currentIndex];
  git.textContent = "Github";
  button.appendChild(git);

  let button2 = elementsCreation("div", "project-button");
  let deploy = elementsCreation("a", "project-link");
  deploy.href = deployedLinks[currentIndex];
  deploy.textContent = "Project";
  button2.appendChild(deploy);

  let links = elementsCreation("div", "all-project-links");
  appendChildren(links, [button2, button]);

  appendChildren(cardBack, [descr, links]);
}

const createProjectDivs = () => {
  let allProjects = elementsCreation("div", "all-projects"); 
  for(project of projectNames){
    let container = elementsCreation("div", "card-container");
    let card = elementsCreation("div", "project-card");
    let front = elementsCreation("div", "card-front");
    let back = elementsCreation("div", "card-back");

    handleCardFront(front);
    handleCardBack(back);

    appendChildren(card, [front, back]);
    container.appendChild(card);
    allProjects.appendChild(container);

    currentIndex++;
  }
  document.body.appendChild(allProjects);
}

createProjectDivs();