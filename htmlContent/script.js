let item = 0;
let eachCon = document.getElementsByClassName("eachCon");
let dot = document.getElementsByClassName("dot");
let change = "true";

console.log(eachCon);
console.log(dot);

eachCon[0].classList.value = "eachCon active";
dot[0].classList.value = "dot black";

let current = 1;
let one = 0;

function Slideshow(n) {
  current += n;
  console.log(current);
  show(current);
}

function currentSlide(n) {
  show(n);
}

function show(n) {
  if (n > eachCon.length) {
    current = 1;
  } else if (n < 1) {
    current = eachCon.length;
  } else {
    current = n;
  }

  console.log(current);
  for (let i = 0; i < eachCon.length; i++) {
    if (eachCon[i].classList.contains("active")) {
      eachCon[i].classList.remove("active");
    }
  }
  for (let i = 0; i < dot.length; i++) {
    if (dot[i].classList.contains("black")) {
      dot[i].classList.remove("black");
    }
  }
  eachCon[current - 1].classList.add("active");
  dot[current - 1].classList.add("black");
  item=current-1;
}

// Automatic slides

// let eachCon = document.getElementsByClassName("eachCon");
// let dot = document.getElementsByClassName("dot");

console.log(eachCon);
console.log(dot);

// eachCon[item].classList.value = "eachCon active";
// dot[item].classList.value = "dot black";

function repeat() {
  for (let i = 0; i < eachCon.length; i++) {
    if (eachCon[i].classList.contains("active")) {
      eachCon[i].classList.remove("active");
    }
  }
  for (let i = 0; i < dot.length; i++) {
    if (dot[i].classList.contains("black")) {
      dot[i].classList.remove("black");
    }
  }
  if (item > eachCon.length - 1) {
    item = 0;
  }

  eachCon[item].classList.value = "eachCon active";
  dot[item].classList.value = "dot black";

  item += 1;
  setTimeout(() => repeat(), 4000);
}

repeat();
console.log(one - 1);
