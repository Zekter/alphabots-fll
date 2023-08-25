const AugB = document.getElementById("AugB");
const SeptB = document.getElementById("SeptB");
const OctB = document.getElementById("OctB");
const NovB = document.getElementById("NovB");
const DecB = document.getElementById("DecB");

const AugS = document.getElementById("AugS");
const SeptS = document.getElementById("SeptS");
const OctS = document.getElementById("OctS");
const NovS = document.getElementById("NovS");
const DecS = document.getElementById("DecS");

AugB.addEventListener("click", () => {
    AugS.scrollIntoView({ behavior: "smooth" });
});

SeptB.addEventListener("click", () => {
    SeptS.scrollIntoView({ behavior: "smooth" });
});

OctB.addEventListener("click", () => {
    OctS.scrollIntoView({ behavior: "smooth" });
});

NovB.addEventListener("click", () => {
    NovS.scrollIntoView({ behavior: "smooth" });
});

DecB.addEventListener("click", () => {
    DecS.scrollIntoView({ behavior: "smooth" });
});




// Select the button element
let mybutton = document.getElementById("myBtn");

// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function() {
  scrollFunction();
};

function scrollFunction() {
  if (document.body.scrollTop > 1000 || document.documentElement.scrollTop > 1000) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}

// When the user clicks on the button, scroll to the top of the document smoothly
function topFunction() {
  // Use behavior: "smooth" to achieve a smooth scroll effect
  window.scrollTo({
    top: 0,
    behavior: "smooth"
  });
}



