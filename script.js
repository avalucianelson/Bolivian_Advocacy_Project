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
    const signNowButton = document.getElementById('sign-now-button');

    // Function to validate the form inputs
    const validateForm = (event) => {
        event.preventDefault(); // Prevent the default form submission
        let containsErrors = false;
        let petitionInputs = document.getElementById("sign-petition").elements;

        // Check each input in the form
        for (let i = 0; i < petitionInputs.length; i++) {
            // Only validate text inputs
            if (petitionInputs[i].type === "text" && petitionInputs[i].value.length < 2) {
                petitionInputs[i].classList.add('error');
                containsErrors = true;
            } else {
                petitionInputs[i].classList.remove('error');
            }
        }

        // If no errors, proceed to add the signature
        if (!containsErrors) {
            addSignature();
        }
    };

    // Function to add a new signature and reset the form
    function addSignature() {
        const name = document.getElementById('name').value;
        const country = document.getElementById('country').value;

        const newSignature = document.createElement('p');
        newSignature.textContent = `🖊️ ${name} from ${country} signed the pledge!`;

        const signaturesSection = document.querySelector('.signatures');
        signaturesSection.appendChild(newSignature);

        // Reset the form fields
        document.getElementById("sign-petition").reset();
    }

    // Attach the event listener to the sign now button
    signNowButton.addEventListener('click', validateForm);
});
