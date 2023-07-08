const h1 = document.getElementById("main-title");

h1.textContent = "Some Other Title!";
h1.style.color = "white";
h1.style.backgroundColor = "black";

const li = document.querySelector("li:last-of-type");
li.textContent = li.textContent + " (changed!)";

// const listItemElements = document.querySelectorAll("li");

const listItemElements = document.getElementsByTagName("li");

for (const listItemEl of listItemElements) {
  console.dir(listItemEl);
}

const section = document.querySelector("section");
const button = document.querySelector("button");

// section.style.backgroundColor = "blue";
section.className = "red-bg";

button.addEventListener("click", () => {
  // if (section.className === "red-bg visible") {
  //   section.className = "red-bg invisible";
  // } else {
  //   section.className = "red-bg visible";
  // }
  // section.classList.toggle("visible");
  section.classList.toggle("invisible");
});

// const list = document.querySelector("ul");
// list.innerHTML = list.innerHTML + "Item 4";

const div = document.querySelector("div");
div.insertAdjacentHTML("beforeend", "<p>Something Went Wrong!</p>");

const newLi = document.createElement("li");
newLi.textContent = "Item 4";

const list = document.querySelector("ul");
list.appendChild(newLi);

// list.prepend(newLi);

const secondLi = list.children[1];
// secondLi.after(newLi);
secondLi.insertAdjacentElement("afterend", newLi);

const newLi2 = newLi.cloneNode(true);
list.append(newLi, newLi2); // We moved the original to the end from the 3 line...
