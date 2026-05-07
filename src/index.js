import "./style.css";
import { home, about } from "./home.js";
import contact from "./contact.js";
import menu from "./menu.js";

const content = document.querySelector("#content");
const homeBtn = document.querySelector(".home-btn");
const menuBtn = document.querySelector(".menu-btn");
const contactBtn = document.querySelector(".contact-btn");

function setContent(...elements) {
  content.innerHTML = "";
  content.append(...elements);
}

homeBtn.addEventListener("click", () => setContent(home, about));
menuBtn.addEventListener("click", () => setContent(menu));
contactBtn.addEventListener("click", () => setContent(contact));

setContent(home, about);
