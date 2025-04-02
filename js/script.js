function runTypingEffect() {
  const text = 'I am Nithish Kumar C';
  const typingElement = document.getElementById('typing-text');
  const typingDelay = 100;

  typeText(text, typingElement, typingDelay);
}

function typeText(text, typingElement, delay) {
  for (let i = 0; i < text.length; i++) {
    setTimeout(() => {
      typingElement.textContent += text.charAt(i);
    }, delay * i);
  }
}
document.addEventListener('DOMContentLoaded', runTypingEffect);


document.addEventListener('DOMContentLoaded', () => {
  const contactForm = document.getElementById('contact-form');
  const contactName = document.getElementById('contactName');
  const contactEmail = document.getElementById('contactEmail');
  const contactProject = document.getElementById('contactProject');
  const contactMessage = document.getElementById('contact-message');

  const sendEmail = (e) => {
    e.preventDefault();

    if (contactName.value=== '' || contactEmail.value === '' || contactProject.value   === '') {
      // contactMessage.classList.remove('color-blue');
      // contactMessage.classList.add('color-red');
      contactMessage.textContent = 'Please fill out all the fields 📩';
    } else {
      emailjs.sendForm('service_gzi0mnc', "template_i1ys5wg", '#contact-form', 'BRv2FBMqGdFiszEng')
        .then((response) => {
          // contactMessage.classList.remove('color-red');
          // contactMessage.classList.add('color-blue');
          contactMessage.textContent = 'Message sent ✅';
          console.log('Success:', response);
        })
        .catch((error) => {
          // contactMessage.classList.remove('color-blue');
          // contactMessage.classList.add('color-red');
          contactMessage.textContent = 'OOPS! SOMETHING HAS FAILED...';
          console.error('Error:', error);
        })
        .finally(() => {
          contactName.value = '';
          contactEmail.value = '';
          contactProject.value = '';
          setTimeout(() => {
            contactMessage.textContent = '';
          }, 2000);
          
        });
        
    }
  };

  contactForm.addEventListener('submit', sendEmail);
});
