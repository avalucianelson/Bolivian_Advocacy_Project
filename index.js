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

document.addEventListener('DOMContentLoaded', function() {
    // Query for the sign now button
    const signNowButton = document.getElementById('sign-now-button');

    // Function to add a new signature
    function addSignature() {
        // Prevent form from submitting normally
        event.preventDefault();

        // Get the input values from the form
        const name = document.getElementById('name').value;
        const country = document.getElementById('country').value;

        // Create a new paragraph element for the signature
        const newSignature = document.createElement('p');
        newSignature.textContent = `🖊️ ${name} from ${country} signed the pledge!`;

        // Query for the signatures section
        const signaturesSection = document.querySelector('.signatures');

        // Append the new signature to the signatures section
        signaturesSection.appendChild(newSignature);

        // Optionally clear the form fields
        document.getElementById('sign-petition').reset();
    }

    // Add event listener to the button
    signNowButton.addEventListener('click', addSignature);
});
