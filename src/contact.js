import phone from "./images/contact.png";

const contact = document.createElement("div");
contact.classList.add("flex");
contact.id = "contact";

const left = document.createElement("div");
left.classList.add("flex-left");
const contactPic = document.createElement("img");
contactPic.classList.add("flex-image");
contactPic.src = phone;
left.appendChild(contactPic);

const right = document.createElement("div");
right.classList.add("flex-right");
const form = document.createElement("form");
const contactTitle = document.createElement("h3");
contactTitle.classList.add("center-text");
contactTitle.textContent = "Make a Reservation";

const names = document.createElement("fieldset");
const fname = document.createElement("label");
fname.textContent = "First Name:";
fname.setAttribute("for", "fname");
const fnameInput = document.createElement("input");
fnameInput.type = "text";
fnameInput.id = "fname";
fnameInput.name = "fname";
const lname = document.createElement("label");
lname.textContent = "Last Name:";
lname.setAttribute("for", "lname");
const lnameInput = document.createElement("input");
lnameInput.type = "text";
lnameInput.id = "lname";
lnameInput.name = "lname";
names.appendChild(fname);
names.appendChild(fnameInput);
names.appendChild(lname);
names.appendChild(lnameInput);

const contacts = document.createElement("fieldset");
const email = document.createElement("label");
email.textContent = "Email:";
email.setAttribute("for", "email");
const emailInput = document.createElement("input");
emailInput.type = "email";
emailInput.id = "email";
emailInput.name = "email";
const phoneNo = document.createElement("label");
phoneNo.textContent = "Phone No:";
phoneNo.setAttribute("for", "phoneNo");
const phoneNoInput = document.createElement("input");
phoneNoInput.type = "number";
phoneNoInput.id = "phoneNo";
phoneNoInput.name = "phoneNo";
contacts.appendChild(email);
contacts.appendChild(emailInput);
contacts.appendChild(phoneNo);
contacts.appendChild(phoneNoInput);

const dayAndTime = document.createElement("fieldset");
const date = document.createElement("label");
date.textContent = "Date:";
date.setAttribute("for", "date");
const dateInput = document.createElement("input");
dateInput.type = "date";
dateInput.id = "date";
dateInput.name = "date";
const time = document.createElement("label");
time.textContent = "Phone No:";
time.setAttribute("for", "time");
const timeInput = document.createElement("input");
timeInput.type = "time";
timeInput.id = "time";
timeInput.name = "time";
dayAndTime.appendChild(date);
dayAndTime.appendChild(dateInput);
dayAndTime.appendChild(time);
dayAndTime.appendChild(timeInput);

const bookBtn = document.createElement("button");
bookBtn.textContent = "Book a Ticket";

form.appendChild(contactTitle);
form.appendChild(names);
form.appendChild(contacts);
form.appendChild(dayAndTime);
form.appendChild(bookBtn);

right.appendChild(form);
contact.appendChild(left);
contact.appendChild(right);

export default contact;
