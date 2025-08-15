// function declaration
function sayHello() {
  console.log("Hello, World!");
}

// function expression
const add = function (a, b) {
  console.log(a + b);
};

sayHello();
add(5, 10);
add("Hello", "world.");

(function immediatelyInvokedFunction() {
  console.log("This function runs immediately!");
})();

// arrow function
const square = (x) => {
  console.log(x * x);
};

square(5);

// anonymous function
const multiply = (a, b) => a * b;

console.log(multiply(5, 10));

function Car(make, model, year) {
  this.make = make;
  this.model = model;
  this.year = year;
  this.getName = function () {
    return this.make + " " + this.model + " " + this.year;
  };
}

Car.prototype.getAge = function () {
  return new Date().getFullYear() - this.year;
};

var c = new Car("Mclaren", "720S", 2018);
alert(c.getName());

const obj1 = { p1: 0, p2: "text" };
const obj2 = { p2: "overwritten", p3: true, __proto__: obj1 };

const array = [];
let len = array.length;
array.push(1);
array.pop();

const sendWelcomeEmail = (email) => {
  console.log(`Sending welcome email to ${email}`);
};
const users = [
  { name: "Alice", email: "alice@example.com" },
  { name: "Bob", email: "bob@example.com" },
  { name: "Charlie", email: "charlie@example.com" },
];
users.forEach((user) => {
  sendWelcomeEmail(user.email);
});
const mappedUsers = users.map((user) => {
  console.log(`User: ${user.name}, Email: ${user.email}`);
});
function filterEmailsByLetter(users, letter) {
  return users.filter((user) => user.email.startsWith(letter));
}
const filteredEmails = filterEmailsByLetter(users, "a");
filteredEmails.forEach((user) => {
  console.log(`Filtered User: ${user.name}, Email: ${user.email}`);
});
const user = users.find((user) => user.name === "Alice");
const testResults = [90, 80, 85, 70];
const average =
  testResults.reduce((acc, score) => acc + score, 0) / testResults.length;
console.log(`Average Test Score: ${average}`);

const div = document.getElementById("id");
div.textContent = "New text";
document.getElementsByTagName("tagName");
document.createElement("elementName");
parentNode.appendChild(childNode);
element.innerHTML;
element.style;
// element.style.propertyName = value;
// window.open(url, name, [features, replace]);
window.onload;
window.dump("message");
let x = 0;
let y = 0;
window.scrollTo(x, y);

const ctx = myCanvas.getContext("2d");
ctx.fillRect(20, 20, 60, 60);

const button = document.getElementById("button");
button.addEventListener("click", () => {
  console.log("Clicked!");
});
