let themeButton = document.getElementById("theme-button");

// Toggle Dark Mode Function
const toggleDarkMode = () => {
    document.body.classList.toggle("dark-mode"); // Add/remove the dark-mode class from the body

    // Check if dark mode is currently active and update the button text accordingly
    if (document.body.classList.contains("dark-mode")) {
        themeButton.textContent = "Toggle Light Mode"; // Change button text to indicate light mode
    } else {
        themeButton.textContent = "Toggle Dark Mode"; // Revert button text to dark mode
    }
};

// Add click event listener to the button to trigger dark mode toggle
themeButton.addEventListener("click", toggleDarkMode);
