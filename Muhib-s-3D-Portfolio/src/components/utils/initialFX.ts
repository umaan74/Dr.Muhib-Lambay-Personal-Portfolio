import gsap from "gsap";

export function initialFX() {
  document.body.style.overflowY = "auto";
  const main = document.querySelector("main");
  if (main) {
    main.classList.add("main-active");
  }

  gsap.fromTo(
    ".landing-content",
    { opacity: 0, y: 30 },
    {
      opacity: 1,
      y: 0,
      duration: 0.8,
      ease: "power3.out",
      delay: 0.1,
    }
  );

  gsap.fromTo(
    ".header",
    { opacity: 0, y: -20 },
    {
      opacity: 1,
      y: 0,
      duration: 0.6,
      ease: "power2.out",
      delay: 0.2,
    }
  );
}
