document.addEventListener('DOMContentLoaded', () => {
  const form = document.getElementById('contactForm');
  const status = document.getElementById('form-status');

  if (form) {
    form.addEventListener('submit', async (e) => {
      e.preventDefault();
      
      const submitBtn = form.querySelector('button[type="submit"]');
      const originalBtnText = submitBtn.innerHTML;
      
      try {
        // Disable button and show loading state
        submitBtn.disabled = true;
        submitBtn.innerHTML = '<i class="fas fa-spinner fa-spin"></i> Sending...';
        
        const formData = new FormData(form);
        const response = await fetch(form.action, {
          method: 'POST',
          body: formData,
          headers: {
            'Accept': 'application/json'
          }
        });

        if (response.ok) {
          // Show success message
          status.className = 'form-status success';
          status.innerHTML = getRandomMessage(messageCategory.SUCCESS);
          form.reset();
        } else {
          throw new Error('Form submission failed');
        }
      } catch (error) {
        // Show error message
        status.className = 'form-status error';
        status.innerHTML =  getRandomMessage(messageCategory.ERROR);;
        console.error('Error:', error);
      } finally {
        // Reset button state
        submitBtn.disabled = false;
        submitBtn.innerHTML = originalBtnText;
      }
    });
  }
});

const messageCategory = {
    SUCCESS: 'success',
    ERROR: "error"
}

// Message object containing array of both success and error messages
const messages = {
  [messageCategory.SUCCESS]: [
    "Message received! I'll get back to you soon. Thanks for reaching out!",
    "Thanks for your message! I'll be in touch shortly.",
    "Got it! I'll respond as soon as I can. Have a great day!",
    "Message sent successfully! Looking forward to connecting with you.",
    "Your message is on its way! I'll get back to you soon."
  ],
  [messageCategory.ERROR]: [
    "Oops! Something went wrong. Please try again.",
    "Hmm, that didn't work. Could you try once more?",
    "Message not sent. Please check your connection and try again.",
    "We hit a snag. Please try submitting again in a moment.",
    "Message delivery failed. Please try again or contact me directly."
  ]
};

// Function to get a random message from a category
const getRandomMessage = (type) => {
  const messageArray = messages[type] || [];
  return messageArray[Math.floor(Math.random() * messageArray.length)] || 
    (type === messageCategory.SUCCESS ? "Thank you for your message!" : "An error occurred. Please try again.");
};

