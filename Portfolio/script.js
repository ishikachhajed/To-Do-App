// script.js

document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById("contactForm");
  const formStatus = document.getElementById("formStatus");

  form.addEventListener("submit", function (e) {
    e.preventDefault(); // Prevent the page from refreshing

    // Collect values
    const name = document.getElementById("name").value.trim();
    const email = document.getElementById("email").value.trim();
    const message = document.getElementById("message").value.trim();

    // Basic validation
    if (!name || !email || !message) {
      formStatus.textContent = "Please fill out all fields.";
      formStatus.style.color = "red";
      return;
    }

    // Simulate sending (could integrate with EmailJS, Formspree, etc.)
    formStatus.textContent = "Sending...";
    formStatus.style.color = "#b08968";

    // Fake delay to mimic sending
    setTimeout(() => {
      form.reset();
      formStatus.textContent = "Thank you! Your message has been sent.";
      formStatus.style.color = "green";
    }, 1500);
  });
});
