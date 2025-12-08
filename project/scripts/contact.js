const STORAGE_KEY = "contactFormSubmissions";
const MAX_SUBMISSIONS = 2; // Maximum number of allowed submissions
const SUBMISSION_WINDOW = 24 * 60 * 60 * 1000; // 24 hours in milliseconds

const trackSubmission = () => {
  const now = Date.now();
  let submissions = JSON.parse(localStorage.getItem(STORAGE_KEY) || "[]");

  // Remove submissions older than 24 hours
  submissions = submissions.filter(
    (timestamp) => now - timestamp < SUBMISSION_WINDOW
  );

  // Add current submission
  submissions.push(now);
  localStorage.setItem(STORAGE_KEY, JSON.stringify(submissions));

  return submissions.length;
};

document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById("contactForm");
  const status = document.getElementById("form-status");

  if (form) {
    form.addEventListener("submit", async (e) => {
      e.preventDefault();

      const submitBtn = form.querySelector('button[type="submit"]');
      const originalBtnText = submitBtn.innerHTML;

      try {
        // Disable button and show loading state
        submitBtn.disabled = true;
        submitBtn.innerHTML =
          '<i class="fas fa-spinner fa-spin"></i> Sending...';

        const formData = new FormData(form);
        const response = await fetch(form.action, {
          method: "POST",
          body: formData,
          headers: {
            Accept: "application/json",
          },
        });

        if (response.ok) {
          const submissionCount = trackSubmission();
          status.className = "form-status success";

          let message;
          console.log({ submissionCount, MAX_SUBMISSIONS });
          if (submissionCount > MAX_SUBMISSIONS) {
            message = `I've received your message (${submissionCount} messages in 24h). Please be patient, I'll get back to you as soon as possible!`;
          } else {
            message = getRandomMessage(messageType.SUCCESS);
          }

          status.innerHTML = message;

          form.reset();
        } else {
          throw new Error("Form submission failed");
        }
      } catch (error) {
        // Show error message
        status.className = "form-status error";
        status.innerHTML = getRandomMessage(messageType.ERROR);
        console.error("Error:", error);
      } finally {
        // Reset button state
        submitBtn.disabled = false;
        submitBtn.innerHTML = originalBtnText;
      }
    });
  }
});

const messageType = {
  SUCCESS: "success",
  ERROR: "error",
};

// Message object containing array of both success and error messages
const messages = {
  [messageType.SUCCESS]: [
    "Message received! I'll get back to you soon. Thanks for reaching out!",
    "Thanks for your message! I'll be in touch shortly.",
    "Got it! I'll respond as soon as I can. Have a great day!",
    "Message sent successfully! Looking forward to connecting with you.",
    "Your message is on its way! I'll get back to you soon.",
  ],
  [messageType.ERROR]: [
    "Oops! Something went wrong. Please try again.",
    "Hmm, that didn't work. Could you try once more?",
    "Message not sent. Please check your connection and try again.",
    "We hit a snag. Please try submitting again in a moment.",
    "Message delivery failed. Please try again or contact me directly.",
  ],
};

const fallBackMessage = (type) => {
  if (type === messageType.SUCCESS) {
    return "Thanks for your message! I'll be in touch shortly.";
  } else {
    return "An error occurred. Please try again.";
  }
};

// Function to get a random message from a category
const getRandomMessage = (type) => {
  const messageArray = messages[type] || [];
  return (
    messageArray[Math.floor(Math.random() * messageArray.length)] ||
    fallBackMessage(type)
  );
};
