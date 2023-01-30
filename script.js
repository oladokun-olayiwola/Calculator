
const equals = document.getElementById("equals");
const del = document.getElementById("delete");
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
