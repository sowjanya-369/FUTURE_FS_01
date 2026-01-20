const backToTop = document.getElementById("backToTop");
const sections = document.querySelectorAll("section");
const navLinks = document.querySelectorAll(".nav-links a");
const form = document.querySelector(".contact-form");
const statusText = document.querySelector(".form-status");

// Back to top
window.addEventListener("scroll", () => {
  backToTop.classList.toggle("show", window.scrollY > 400);
  updateActiveLink();
});

backToTop.addEventListener("click", () => {
  window.scrollTo({ top: 0, behavior: "smooth" });
});

// Active nav link
function updateActiveLink() {
  sections.forEach(section => {
    const rect = section.getBoundingClientRect();
    if (rect.top <= 150 && rect.bottom >= 150) {
      navLinks.forEach(link => {
        link.classList.toggle(
          "active",
          link.getAttribute("href") === `#${section.id}`
        );
      });
    }
  });
}

// Fake form submit
form.addEventListener("submit", e => {
  e.preventDefault();
  statusText.textContent = "Message sent successfully!";
  form.reset();
});
