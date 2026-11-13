
// Mobile navigation
const menu = document.getElementById("menu");
const nav = document.getElementById("nav");

menu.addEventListener("click", () => {
  nav.classList.toggle("show");
  menu.textContent = nav.classList.contains("show") ? "✕" : "☰";
});

// Close mobile menu after clicking a link
document.querySelectorAll("#nav a").forEach(link => {
  link.addEventListener("click", () => {
    nav.classList.remove("show");
    menu.textContent = "☰";
  });
});

// Portfolio category filters
const filters = document.querySelectorAll(".filter");
const projects = document.querySelectorAll(".project");

filters.forEach(button => {
  button.addEventListener("click", () => {

    filters.forEach(item => item.classList.remove("active"));
    button.classList.add("active");

    const category = button.dataset.filter;

    projects.forEach(project => {
      if (
        category === "all" ||
        project.dataset.category === category
      ) {
        project.classList.remove("hide");
      } else {
        project.classList.add("hide");
      }
    });

  });
});

// Simple scroll reveal animation
const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add("visible");
      observer.unobserve(entry.target);
    }
  });
}, { threshold: 0.15 });

document.querySelectorAll(".section, .project").forEach(item => {
  item.classList.add("reveal");
  observer.observe(item);
});
