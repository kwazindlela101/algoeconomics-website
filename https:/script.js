// Smooth scroll for nav links
document.querySelectorAll("nav a").forEach(link => {
  link.addEventListener("click", function(e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute("href"));
    if (target) {
      target.scrollIntoView({ behavior: "smooth" });
    }
  });
});

// Animate sections on scroll
const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add("visible");
    }
  });
}, { threshold: 0.1 });

document.querySelectorAll("section").forEach(section => {
  observer.observe(section);
});

// Countdown for trial urgency (optional)
const countdown = document.getElementById("trial-countdown");
if (countdown) {
  let timeLeft = 3600; // 1 hour
  setInterval(() => {
    if (timeLeft > 0) {
      timeLeft--;
      const mins = Math.floor(timeLeft / 60);
      const secs = timeLeft % 60;
      countdown.textContent = `${mins}m ${secs}s left to start your trial`;
    }
  }, 1000);
}
