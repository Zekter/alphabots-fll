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





