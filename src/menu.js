import oliviaPic from "./images/olivia.jpg";
import sombrPic from "./images/sombr.jpg";
import brunoPic from "./images/bruno.jpg";
import bienPic from "./images/bien.jpg";
import deanPic from "./images/dean.jpg";
import nikitaPic from "./images/nikita.jpg";
import samPic from "./images/sam.jpg";
import ayraPic from "./images/ayra.jpg";
import remaPic from "./images/rema.jpg";
import amyPic from "./images/amy.jpg";
import shinPic from "./images/shin.jpg";
import toddPic from "./images/todd.jpg";
import rayePic from "./images/raye.jpg";
import billiePic from "./images/billie.jpg";
import danielPic from "./images/daniel.jpg";
import tylaPic from "./images/tyla.jpg";

class MenuItem {
  constructor(title, artist, description, price, image) {
    this.title = title;
    this.artist = artist;
    this.description = description;
    this.image = image;
    this.price = price;
  }

  createSideMenuItem() {
    const sideMenuItem = document.createElement("div");
    sideMenuItem.classList.add("side-menu-item");

    const sideImage = document.createElement("div");
    sideImage.classList.add("side-image-div");

    const image = document.createElement("img");
    image.classList.add("side-image");
    image.src = this.image;

    const sideRest = document.createElement("div");
    sideRest.classList.add("side-rest");

    const dishName = document.createElement("div");
    dishName.classList.add("dish-name");
    dishName.textContent = this.title;

    const artist = document.createElement("div");
    artist.classList.add("artist");
    artist.textContent = this.artist;

    const dishDescription = document.createElement("div");
    dishDescription.classList.add("dish-description");
    dishDescription.textContent = this.description;

    const price = document.createElement("div");
    price.classList.add("price");
    price.textContent = this.price;

    sideImage.appendChild(image);
    sideRest.append(dishName, artist, dishDescription, price);
    sideMenuItem.append(sideImage, sideRest);
    return sideMenuItem;
  }

  createMenuItem() {
    const mainMenuItem = document.createElement("div");
    mainMenuItem.classList.add("menu-item");

    const menuImage = document.createElement("div");
    menuImage.classList.add("image");

    const image = document.createElement("img");
    image.classList.add("dish-pic");
    image.src = this.image;

    const menuRest = document.createElement("div");
    menuRest.classList.add("rest");

    const dishName = document.createElement("div");
    dishName.classList.add("dish-name");
    dishName.textContent = this.title;

    const artist = document.createElement("div");
    artist.classList.add("artist");
    artist.textContent = this.artist;

    const dishDescription = document.createElement("div");
    dishDescription.classList.add("dish-description");
    dishDescription.textContent = this.description;

    const price = document.createElement("div");
    price.classList.add("price");
    price.textContent = this.price;

    menuImage.appendChild(image);
    menuRest.append(dishName, artist, dishDescription, price);
    mainMenuItem.append(menuImage, menuRest);
    return mainMenuItem;
  }
}

const menu = document.createElement("div");
menu.classList.add("menu");

const menuLeft = document.createElement("div");
menuLeft.classList.add("left");

const menuMiddle = document.createElement("div");
menuMiddle.classList.add("middle");

const menuRight = document.createElement("div");
menuRight.classList.add("right");

const leftHeadline = document.createElement("h1");
leftHeadline.textContent = "Opening Acts";

const middleHeadline = document.createElement("h1");
middleHeadline.textContent = "Main Acts";

const rightHeadline = document.createElement("h1");
rightHeadline.textContent = "After Party";

const rodrigo = new MenuItem(
  '"The GUTS" Lumpia',
  "Olivia Rodrigo",
  'Crispy, golden Filipino spring rolls served with a sweet chili "sour" sauce.',
  "Ksh.300",
  oliviaPic,
).createSideMenuItem();
const ayra = new MenuItem(
  '"Sabi Girl" Fried Yam',
  "Ayra Starr",
  'Perfectly seasoned fried yam spears served with a side of spicy "scent leaf" egg sauce',
  "Ksh. 350",
  ayraPic,
).createSideMenuItem();
const raye = new MenuItem(
  "Escapism Fish Bites",
  "Raye",
  "Mini beer-battered cod bites, a nod to the South London star’s favorite chippy comfort.",
  "Ksh. 600",
  rayePic,
).createSideMenuItem();
const todd = new MenuItem(
  "Sweet Victory Madeleines",
  "Malcom Todd",
  "Light, buttery French sponge cakes served warm—studio fuel for the indie-soul vibe",
  "Ksh. 400",
  toddPic,
).createSideMenuItem();

const daniel = new MenuItem(
  '"Best Part" Honey Glazed Pork',
  "Daniel Caesar",
  'A soulful, slow-roasted pork neck glazed with honey and apples—the ultimate "comfort" headliner.',
  "Ksh. 800",
  danielPic,
).createMenuItem();
const tyla = new MenuItem(
  '"Water" Peri-Peri Chicken',
  "Tyla",
  'South African-style flame-grilled chicken that brings the heat, served with a cooling side of "Jozi" slaw.',
  "Ksh. 1200",
  tylaPic,
).createMenuItem();
const rema = new MenuItem(
  '"Calm Down" Smoky Jollof',
  "Rema",
  "Authentic, spicy Nigerian Jollof rice that's so good it’ll make you want to dance",
  "Ksh. 1400",
  remaPic,
).createMenuItem();
const bien = new MenuItem(
  "Mama Oliech's Headliner",
  "Bien",
  "Deep-fried whole Tilapia served with traditional ugali and sukuma wiki—the pride of Nairobi.",
  "Ksh. 2000",
  bienPic,
).createMenuItem();
const billie = new MenuItem(
  '"Where Are The Avocados?" Ramen',
  "Billie Eilish",
  "A 100% vegan miso broth loaded with silky tofu, mushrooms, and—of course—fresh avocado.",
  "Ksh. 1000",
  billiePic,
).createMenuItem();
const bruno = new MenuItem(
  '"24K Magic" Adobo',
  "Bruno Mars",
  "A rich, savory Filipino chicken adobo marinated in soy, vinegar, and enough garlic to make you feel like a billionaire.",
  "Ksh. 1300",
  brunoPic,
).createMenuItem();
const amy = new MenuItem(
  '"Back to Black" Meatballs',
  "Amy Winehouse",
  "Hearty, homemade Italian-style meatballs simmered in a rich tomato sauce,just like Amy used to make.",
  "Ksh. 1600",
  amyPic,
).createMenuItem();
const nikita = new MenuItem(
  '"Ex" Nyama Choma',
  "Nikita Kering'",
  "Perfectly charred, tender grilled goat meat served with a vibrant kachumbari.",
  "Ksh. 2700",
  nikitaPic,
).createMenuItem();

const dean = new MenuItem(
  'The "Be My Baby" Crepes',
  "Olivia Dean",
  "Delicate crepes filled with Greek yogurt, drizzled with honey, and topped with toasted nuts.",
  "Ksh. 500",
  deanPic,
).createSideMenuItem();
const shin = new MenuItem(
  '"Shin City" Sparkler',
  "Nyashinski",
  'A crisp, sparkling passion fruit cooler with a spicy ginger kick. Perfect for the "After Party" when the lights stay low.',
  "Ksh. 1000",
  shinPic,
).createSideMenuItem();
const sam = new MenuItem(
  '"A Change is Gonna Come" Soul Cobbler',
  "Sam Cooke",
  "A warm, deep-dish peach cobbler that tastes like a classic Southern sunset.",
  "Ksh. 500",
  samPic,
).createSideMenuItem();
const sombr = new MenuItem(
  "Bedroom Pop Pizza & Cold Brew",
  "Sombr",
  'A quirky dessert "pizza" (sweet dough with chocolate) paired with a tall, moody glass of cold brew.',
  "Ksh. 1000",
  sombrPic,
).createSideMenuItem();

menuLeft.append(leftHeadline, rodrigo, ayra, raye, todd);
menuMiddle.append(
  middleHeadline,
  daniel,
  tyla,
  rema,
  bien,
  nikita,
  billie,
  amy,
  bruno,
);
menuRight.append(rightHeadline, sam, dean, shin, sombr);
menu.append(menuLeft, menuMiddle, menuRight);

export default menu;
