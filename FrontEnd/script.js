const divs = document.getElementsByTagName("div");
divs[0].textContent = "New text";

const newDiv = document.createElement("div");
newDiv.textContent = "New div";
document.body.append(newDiv);

let a;
a = 5;
if (a !== 5) {
  console.log(a);
}

const b = true;
const c = "hello";
const d = 2.6;

const createElementWithContent = (text, tag = "div") => {
  const element = document.createElement(tag);
  element.textContent = text;
  return element;
};

const newElement = createElementWithContent("New function");
document.body.append(newElement);

const double = (value) => {
  return value * 2;
};

console.log(double(2));

const languages = ["HTML", "CSS"];
console.log("Length:", languages.length);
console.log(languages[0]);
languages.push("JS");
console.log(languages);
languages.forEach((item, index) => {
  console.log(`${index + 1}: learn ${item.toLowerCase()}`);
});
console.log(
  "Found item:",
  languages.find((item) => item === "HTML")
);

const obj1 = { p1: "Hello world.", p2: 1000 };
const obj2 = { p2: "Overwritten value.", p3: true, __proto__: obj1 };

for (const obj of [obj1, obj2]) {
  console.log(`p1: ${obj.p1}, p2: ${obj.p2}, p3: ${obj.p3}`);
}

const ctx = myCanvas.getContext("2d");
ctx.fillRect(20, 20, 60, 60);
ctx.fillRect(100, 0, 100, 100);
ctx.fillStyle = "lightblue";
ctx.fillRect(120, 20, 60, 60);

import Player from "./Player.js";

const p1 = new Player("Rock", 20);
p1.take_damage(5);

console.log(`${p1.username}: ${p1.health}`);

const newArticle = document.createElement("article");
newArticle.classList.add("player");
newArticle.setAttribute("username", p1.username);

let content = `
  <main>
    <article>
      <h1>${p1.username}</h1>
      <ul>
        <li>Health: ${p1.health}</li>
      </ul>
    </article>
  </main>
`;

newArticle.innerHTML = content;
document.body.append(newArticle);

document
  .querySelectorAll("div")
  .forEach((item) => (item.style.background = "orange"));

let x = 5,
  y = 5;

console.log(x == y ? "True" : "False");

content = `
<article class="container">
  <button class="button">Click Me</button>
</article>
`;

document.body.innerHTML = content;

const container = document.querySelector(".container");
container.style.backgroundColor = "orange";
const button = document.querySelector(".button");

button.addEventListener("click", () => {
  console.log("Clicked!");
});

container.addEventListener(
  "mouseenter",
  () => {
    container.style.backgroundColor = "blue";
  },
  false
);

container.addEventListener(
  "mouseleave",
  () => {
    container.style.backgroundColor = "orange";
  },
  false
);
