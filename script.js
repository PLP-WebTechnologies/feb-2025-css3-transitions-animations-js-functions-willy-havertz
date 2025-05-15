// Function to apply the saved theme from localStorage
function applySavedTheme() {
  const savedTheme = localStorage.getItem("theme");
  if (savedTheme === "dark") {
    document.body.classList.add("dark-mode");
    document.getElementById("status").textContent = "Current Theme: Dark";
  } else {
    document.body.classList.remove("dark-mode");
    document.getElementById("status").textContent = "Current Theme: Light";
  }
}

// Function to toggle theme and save preference
function toggleTheme() {
  document.body.classList.toggle("dark-mode");
  const isDarkMode = document.body.classList.contains("dark-mode");
  localStorage.setItem("theme", isDarkMode ? "dark" : "light");
  document.getElementById("status").textContent = `Current Theme: ${
    isDarkMode ? "Dark" : "Light"
  }`;
}

// Event listener for the theme toggle button
document
  .getElementById("themeToggleBtn")
  .addEventListener("click", toggleTheme);

// Apply the saved theme on page load
window.addEventListener("DOMContentLoaded", applySavedTheme);
