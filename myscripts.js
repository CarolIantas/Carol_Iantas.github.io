// Toggle hamburger menu on mobile
function toggleMenu() {
    const nav = document.getElementById("navLinks");
    nav.classList.toggle("active");
  }
  
  // Smooth scroll for anchor links (optional enhancement)
  document.addEventListener("DOMContentLoaded", () => {
    const links = document.querySelectorAll('a[href^="#"]');
    for (let link of links) {
      link.addEventListener("click", function (e) {
        const target = document.querySelector(this.getAttribute("href"));
        if (target) {
          e.preventDefault();
          target.scrollIntoView({ behavior: "smooth" });
        }
      });
    }
  
    // Fake Contact form success alert (perfect for demo)
    const form = document.querySelector(".contact-form");
    if (form) {
      form.addEventListener("submit", function (e) {
        e.preventDefault();
        alert("Thank you! Your message has been received 💌");
        form.reset();
      });
    }
  });
  
  // Optional: Dark mode toggle
  function toggleDarkMode() {
    document.body.classList.toggle("dark-mode");
  }
  