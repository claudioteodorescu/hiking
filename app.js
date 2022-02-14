const exploreBtn = document.querySelector(".cta-btn");
const tl = gsap.timeline({ defaults: { duration: 0.75, ease: "power3.out" } });

// Scroll To Top
if (history.scrollRestoration) {
  history.scrollRestoration = "manual";
} else {
  window.onbeforeunload = function () {
    window.scrollTo(0, 0);
  };
}

tl.fromTo(
  ".hiking",
  { scale: 2, borderRadius: "50%" },
  {
    scale: 1,
    borderRadius: "0%",
    delay: 0.35,
    duration: 3.5,
    ease: "elastic.out(1.5,1)"
  },
  "<"
);
tl.fromTo(".logo", { x: "100%", opacity: 0 }, { x: 0, opacity: 1 }, 1);
tl.fromTo(".hashtag", { opacity: 0 }, { opacity: 1, delay: 1.5 }, "<");

tl.fromTo(".cta1", { x: "100%", opacity: 0.5 }, { x: 0, opacity: 1 }, "<70%");
tl.fromTo(".cta3", { x: "-100%", opacity: 0.5 }, { x: 0, opacity: 1 }, "<20%");
tl.fromTo(".cta2", { y: "100%", opacity: 0.5 }, { y: 0, opacity: 1 }, "<20%");
tl.fromTo(".cta4", { x: "100%", opacity: 0.5 }, { x: 0, opacity: 1 }, "<20%");
tl.fromTo(".cta6", { x: "-100%", opacity: 0.5 }, { x: 0, opacity: 1 }, "<20%");
tl.fromTo(".cta5", { y: "100%", opacity: 0.5 }, { y: 0, opacity: 1 }, "<20%");
tl.fromTo(".cta7", { y: "-100%", opacity: 0.5 }, { y: 0, opacity: 1 }, "<20%");
tl.fromTo(".cta-btn", { y: 20, opacity: 0 }, { y: 0, opacity: 1 }, "<");
tl.fromTo("body", { overflow: "hidden" }, { overflow: "auto" });

// Split text

// const logo = document.querySelector(".logo");
// const letters = logo.textContent.split("");
// logo.textContent = "";
// letters.forEach((letter) => {
//   logo.innerHTML += '<span class="letter">' + letter + "</span>";
// });
// gsap.set(".letter", { display: "inline-block" });
// gsap.fromTo(
//   ".letter",
//   { y: 30 },
//   { y: 0, delay: 2, stagger: 0.05, ease: "back.out(3)" }
// );
