const one = document.getElementById("one");
const two = document.getElementById("two");
const three = document.getElementById("three");
const four = document.getElementById("four");
const five = document.getElementById("five");
const six = document.getElementById("six");
const seven = document.getElementById("seven");
const eight = document.getElementById("eight");
const nine = document.getElementById("nine");
const zero = document.getElementById("zero");
const plus = document.getElementById("plus");
const minus = document.getElementById("minus");
const mult = document.getElementById("mult");
const divide = document.getElementById("divide");
const equals = document.getElementById("equals");
const del = document.getElementById("delete");
const dot = document.getElementById("dot");
const cancel = document.getElementById("cancel");
const element = document.getElementsByClassName("element");
let screen = document.getElementById("screen");

// General function
const show = (e) => {
  console.log(e.target.value);
  screen.innerText = screen.innerText + "" + e.target.value;
};
for (let i = 0; i < element.length; i++) {
  element[i].addEventListener("click", show);
}

// Event Listeners
cancel.addEventListener("click", function () {
  let screen = document.getElementById("screen");
  let val = screen.innerText;
  screen.innerText = val.substring(0, val.length - 1);
});
//

del.addEventListener("click", function () {
  let screen = document.getElementById("screen");
  screen.innerText = "";
});

//                                                                  =

equals.addEventListener("click", function () {
  const equals = document.getElementById("equals");
  let screen = document.getElementById("screen");
  screen.innerText = eval(screen.innerText);
});
