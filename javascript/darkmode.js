function toggleDarkmode() {
  const html = document.querySelector("html");
  const body = document.querySelector("body");
  const toggleButton = document.getElementById('toggleButton');

  toggleButton.addEventListener("change", function() {
    html.classList.toggle("dark-mode", toggleButton.checked);
    body.style.transition = "background-color 0.5s ease";
  });
}