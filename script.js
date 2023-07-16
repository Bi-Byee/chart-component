var bars = document.getElementsByClassName("bar");

// Find the maximum spending value
var maxSpending = 0;
for (var i = 0; i < bars.length; i++) {
  var value = parseInt(bars[i].getAttribute("data-value"), 10);
  if (value > maxSpending) {
    maxSpending = value;
  }
}
var col1 = 1,
  col2 = 2;
for (var i = 0; i < bars.length; i++) {
  var value = parseInt(bars[i].getAttribute("data-value"), 10);
  var percentage = 30 + (value / maxSpending) * 100; // Convert value to percentage
  bars[i].style.setProperty("--grid-area", "2/" + col1 + "/3/" + col2);
  col1++;
  col2++;
  bars[i].style.height = percentage + "px";
}

var myElement = document.getElementById("m");
var beforeContent = getComputedStyle(myElement, "::before").display;
var pseudoElementStyle = getComputedStyle(myElement, "::before");

bars[0].addEventListener("mouseover", function () {
  myElement.style.setProperty("--dis", "block");
  myElement.style.setProperty("--dis", pseudoElementStyle.display);
});

bars[0].addEventListener("mouseout", function () {
  myElement.style.setProperty("--dis", "none");
  myElement.style.setProperty("--dis", pseudoElementStyle.display);
});

window.addEventListener("load", function () {
  myElement.style.setProperty("--dis", "none");
  myElement.style.setProperty("--dis", pseudoElementStyle.display);
});

var myElement1 = document.getElementById("t");
var beforeContent1 = getComputedStyle(myElement1, "::before").display;
var pseudoElementStyle1 = getComputedStyle(myElement1, "::before");

bars[1].addEventListener("mouseover", function () {
  myElement1.style.setProperty("--dis", "block");
  myElement1.style.setProperty("--dis", pseudoElementStyle1.display);
});

bars[1].addEventListener("mouseout", function () {
  myElement1.style.setProperty("--dis", "none");
  myElement1.style.setProperty("--dis", pseudoElementStyle1.display);
});

window.addEventListener("load", function () {
  myElement1.style.setProperty("--dis", "none");
  myElement1.style.setProperty("--dis", pseudoElementStyle1.display);
});

var myElement2 = document.getElementById("w");
var beforeContent2 = getComputedStyle(myElement2, "::before").display;
var pseudoElementStyle2 = getComputedStyle(myElement2, "::before");

bars[2].addEventListener("mouseover", function () {
  myElement2.style.setProperty("--dis", "block");
  myElement2.style.setProperty("--dis", pseudoElementStyle2.display);
});

bars[2].addEventListener("mouseout", function () {
  myElement2.style.setProperty("--dis", "none");
  myElement2.style.setProperty("--dis", pseudoElementStyle2.display);
});

window.addEventListener("load", function () {
  myElement2.style.setProperty("--dis", "none");
  myElement2.style.setProperty("--dis", pseudoElementStyle2.display);
});

var myElement3 = document.getElementById("t2");
var beforeContent3 = getComputedStyle(myElement3, "::before").display;
var pseudoElementStyle3 = getComputedStyle(myElement3, "::before");

bars[3].addEventListener("mouseover", function () {
  myElement3.style.setProperty("--dis", "block");
  myElement3.style.setProperty("--dis", pseudoElementStyle3.display);
});

bars[3].addEventListener("mouseout", function () {
  myElement3.style.setProperty("--dis", "none");
  myElement3.style.setProperty("--dis", pseudoElementStyle3.display);
});

window.addEventListener("load", function () {
  myElement3.style.setProperty("--dis", "none");
  myElement3.style.setProperty("--dis", pseudoElementStyle3.display);
});

var myElement4 = document.getElementById("f");
var beforeContent4 = getComputedStyle(myElement4, "::before").display;
var pseudoElementStyle4 = getComputedStyle(myElement4, "::before");

bars[4].addEventListener("mouseover", function () {
  myElement4.style.setProperty("--dis", "block");
  myElement4.style.setProperty("--dis", pseudoElementStyle4.display);
});

bars[4].addEventListener("mouseout", function () {
  myElement4.style.setProperty("--dis", "none");
  myElement4.style.setProperty("--dis", pseudoElementStyle4.display);
});

window.addEventListener("load", function () {
  myElement4.style.setProperty("--dis", "none");
  myElement4.style.setProperty("--dis", pseudoElementStyle4.display);
});

var myElement5 = document.getElementById("s");
var beforeContent5 = getComputedStyle(myElement5, "::before").display;
var pseudoElementStyle5 = getComputedStyle(myElement5, "::before");

bars[5].addEventListener("mouseover", function () {
  myElement5.style.setProperty("--dis", "block");
  myElement5.style.setProperty("--dis", pseudoElementStyle5.display);
});

bars[5].addEventListener("mouseout", function () {
  myElement5.style.setProperty("--dis", "none");
  myElement5.style.setProperty("--dis", pseudoElementStyle5.display);
});

window.addEventListener("load", function () {
  myElement5.style.setProperty("--dis", "none");
  myElement5.style.setProperty("--dis", pseudoElementStyle5.display);
});

var myElement6 = document.getElementById("s2");
var beforeContent6 = getComputedStyle(myElement6, "::before").display;
var pseudoElementStyle6 = getComputedStyle(myElement6, "::before");

bars[6].addEventListener("mouseover", function () {
  myElement6.style.setProperty("--dis", "block");
  myElement6.style.setProperty("--dis", pseudoElementStyle6.display);
});

bars[6].addEventListener("mouseout", function () {
  myElement6.style.setProperty("--dis", "none");
  myElement6.style.setProperty("--dis", pseudoElementStyle6.display);
});

window.addEventListener("load", function () {
  myElement6.style.setProperty("--dis", "none");
  myElement6.style.setProperty("--dis", pseudoElementStyle6.display);
});
