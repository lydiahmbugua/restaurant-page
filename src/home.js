import aboutPic from "./images/food.jpg";
import homePic from "./images/pic.jpg";

const home = document.createElement("div");
home.classList.add("flex");
home.id = "home";

const homeLeft = document.createElement("div");
homeLeft.classList.add("flex-left");
const homeHeadline = document.createElement("h1");
homeHeadline.classList.add("headline");
homeHeadline.textContent = "Where Flavor Meets the Beat.";

const homeSubHeadline = document.createElement("h2");
homeSubHeadline.classList.add("sub-headline");
homeSubHeadline.textContent = "A culinary world tour inspired by the icons.";

const homeText = document.createElement("p");
homeText.classList.add("body-text");
homeText.textContent =
  "At The Setlist, we believe every meal should be a performance. Our menu is a curated collection of flavors inspired by the personal favorites of the artists who soundtrack our lives. From the streets of Nairobi to the stages of London, we’ve brought the intel to the table.";

const buttons = document.createElement("div");
const exploreBtn = document.createElement("button");
exploreBtn.textContent = "Explore the Setlist";
buttons.appendChild(exploreBtn);
const reserveBtn = document.createElement("button");
reserveBtn.textContent = "Book Your Front Row Seat";
buttons.appendChild(reserveBtn);

const homeRight = document.createElement("div");
homeRight.classList.add("flex-right");
const homeImage = document.createElement("img");
homeImage.classList.add("flex-image");
homeImage.src = homePic;
homeRight.appendChild(homeImage);

homeLeft.append(homeHeadline, homeSubHeadline, homeText, buttons);
home.append(homeLeft, homeRight);

const about = document.createElement("div");
about.classList.add("flex");
about.id = "about";

const aboutLeft = document.createElement("div");
aboutLeft.classList.add("flex-left");
const aboutImage = document.createElement("img");
aboutImage.classList.add("flex-image");
aboutImage.src = aboutPic;
aboutLeft.appendChild(aboutImage);

const aboutRight = document.createElement("div");
aboutRight.classList.add("flex-right");
const aboutHeadline = document.createElement("h1");
aboutHeadline.classList.add("headline");
aboutHeadline.textContent = "The Story Behind the Stage.";

const aboutText = document.createElement("div");
aboutText.classList.add("about-text");

const aboutPara = document.createElement("p");
aboutPara.textContent =
  "We believe that great music and great food come from the same place—soul, heritage, and a bit of proper magic. Our kitchen is a tribute to the icons who define our generations. We’ve scoured interviews, tour riders, and childhood stories to find the real intel on what fuels the world’s greatest creators.";
const aboutPara2 = document.createElement("p");
aboutPara2.textContent =
  "From Nyashinski’s favorite Kenyan staples to Billie Eilish’s vegan cravings, our menu is a global tour that bridges the gap between the studio and the dinner table.";

const aboutPara3 = document.createElement("h3");
aboutPara3.classList.add("center-text");
aboutPara3.textContent = "Our Philosophy";

const justify = document.createElement("div");
justify.classList.add("justify");

const headliners = document.createElement("p");
headliners.innerHTML = `<strong>The Headliners:</strong> Only the freshest ingredients make it to the Main Stage.`;

const vibe = document.createElement("p");
vibe.innerHTML = `<strong>The Vibe:</strong> Low lights, high contrast, and a spotlight on what matters most—the flavor.`;

const encore = document.createElement("p");
encore.innerHTML = `<strong>The Encore:</strong> We believe every meal deserves a memorable finish, which is why our 'After Party' drinks are designed to keep the rhythm going long after the last bite.`;

const aboutPara7 = document.createElement("p");
aboutPara7.textContent =
  "Every plate is a tribute. Every drink is an ode. Welcome to the show.";

aboutRight.append(aboutHeadline, aboutText);
aboutText.append(aboutPara, aboutPara2, aboutPara3, justify);
justify.append(headliners, vibe, encore);
aboutText.appendChild(aboutPara7);
about.append(aboutLeft, aboutRight);

export { home, about };
