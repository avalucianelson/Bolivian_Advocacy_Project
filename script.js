document.addEventListener('DOMContentLoaded', function() {
    const signNowButton = document.getElementById('sign-now-button');

    // Animation object
    let animation = {
        revealDistance: 150,         // Distance from the top of the viewport for triggering the reveal
        initialOpacity: 0,           // Starting opacity for elements
        transitionDelay: 0,          // Delay before transition starts
        transitionDuration: '2s',    // Duration of the transition
        transitionProperty: 'all',   // Which properties to transition
        transitionTimingFunction: 'ease' // Timing function for the transition
    };

    let revealableContainers = document.querySelectorAll('.revealable');

    function reveal() {
        for (let i = 0; i < revealableContainers.length; i++) {
            let windowHeight = window.innerHeight;
            let topOfRevealableContainer = revealableContainers[i].getBoundingClientRect().top;
            
            if (topOfRevealableContainer < windowHeight - animation.revealDistance) {
                revealableContainers[i].classList.add('active');
            } else {
                revealableContainers[i].classList.remove('active');
            }
        }
    }

    // Initial call to reveal to handle elements already in view
    reveal();

    // Add event listener for scroll to trigger reveal
    window.addEventListener('scroll', reveal);

    // Function to validate the form inputs
    const validateForm = (event) => {
        event.preventDefault();
        let containsErrors = false;
        let petitionInputs = document.getElementById("sign-petition").elements;

        // Create a person object using the order of inputs
        let person = {
            name: petitionInputs[0].value,    // First input: name
            country: petitionInputs[1].value  // Second input: country
            // Add more fields as needed, following the order of inputs
        };

        // Validate inputs using the person object
        if (person.name.length < 2) {
            petitionInputs[0].classList.add('error');
            containsErrors = true;
        } else {
            petitionInputs[0].classList.remove('error');
        }

        if (person.country.length < 2) {
            petitionInputs[1].classList.add('error');
            containsErrors = true;
        } else {
            petitionInputs[1].classList.remove('error');
        }

        if (!containsErrors) {
            addSignature(person);
            toggleModal(person);
        }
    };

    // Function to add a new signature and reset the form
    function addSignature(person) {
        const newSignature = document.createElement('p');
        newSignature.textContent = `🖊️ ${person.name} from ${person.country} signed the pledge!`;

        const signaturesSection = document.querySelector('.signatures');
        signaturesSection.appendChild(newSignature);

        document.getElementById("sign-petition").reset();
    }

    // Function to toggle the modal
    function toggleModal(person) {
        const modal = document.getElementById('thanks-modal');
        const modalContent = document.getElementById('thanks-modal-content');
        const closeModalButton = document.getElementById('close-modal-button');

        // Update modal content with personalized message
        modalContent.textContent = `Thank you, ${person.name}, for signing the petition!`;

        // Display the modal
        modal.style.display = 'flex';

        // Hide the modal after a few seconds
        setTimeout(() => {
            modal.style.display = 'none';
        }, 4000); // 4000ms = 4 seconds

        // Add event listener to close button
        closeModalButton.addEventListener('click', () => {
            modal.style.display = 'none';
        });
    }

    // Attach the event listener to the sign now button
    signNowButton.addEventListener('click', validateForm);

    // Scroll animation using Intersection Observer
    const sections = document.querySelectorAll('.section');

    const observerOptions = {
        threshold: 0.1
    };

    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('section-visible');
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);

    sections.forEach(section => {
        observer.observe(section);
    });
});
