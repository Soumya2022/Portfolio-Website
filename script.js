// Contact form variables
const form = document.querySelector("[data-form]");
const formInputs = document.querySelectorAll("[data-form-input]");
const formBtn = document.querySelector("[data-form-btn]");

// Function to check form validity
function checkFormValidity() {
  formBtn.disabled = !form.checkValidity();
}

// Function to handle form submission
function handleFormSubmission(event) {
  event.preventDefault();

  // Check form validity again before sending the email
  if (form.checkValidity()) {
    const to_name = "EmailJS Team";
    const from_name = document.querySelector('[name="Name"]').value;
    const from_email = document.querySelector('[name="email"]').value;
    const message = document.querySelector('[name="Message"]').value;

    // Include sender's email address in the message
    const fullMessage = `Sender's Email: ${from_email}\n\n${message}`;

    const templateParams = {
      to_name: to_name,
      from_name: from_name,
      message: fullMessage,
    };

    // Use your actual EmailJS service ID, template ID, and user ID
    emailjs
      .send("service_9o1zwyv", "template_hbssi9e", templateParams, "PJQEbBoWThyF3IEgB")
      .then(
        function (response) {
          console.log("Email sent successfully:", response);
          // Provide feedback to the user (e.g., show a success message)
        },
        function (error) {
          console.error("Email sending failed:", error);
          // Provide feedback to the user (e.g., show an error message)
        }
      );

    form.reset();
    checkFormValidity(); // Reset the button state
  }
}

// Add input event listener to all form input fields
formInputs.forEach((input) => {
  input.addEventListener("input", checkFormValidity);
});

// Add submit event listener to the form
form.addEventListener("submit", handleFormSubmission);
