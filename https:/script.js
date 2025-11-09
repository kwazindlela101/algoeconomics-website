document.addEventListener("DOMContentLoaded", () => {
  console.log("JS is working!");

  const fadeEls = document.querySelectorAll(".fade-in");

  const revealOnScroll = () => {
    fadeEls.forEach(el => {
      const rect = el.getBoundingClientRect();
      if (rect.top < window.innerHeight - 50) {
        el.classList.add("visible");
      }
    });
  };

  window.addEventListener("scroll", revealOnScroll);
  revealOnScroll();
});
