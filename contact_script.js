
document.addEventListener('DOMContentLoaded', function () {
    const contactForm = document.getElementById('contactForm');
    const responseMessage = document.getElementById('responseMessage');

    contactForm.addEventListener('submit', function (event) {
        event.preventDefault(); 
   
        const name = document.getElementById('name').value;
        const email = document.getElementById('email').value;
        const message = document.getElementById('message').value;

            if (!validateEmail(email)) {
            responseMessage.textContent = "Please enter a valid email address.";
            responseMessage.style.color = 'red';
            return;
        }

            setTimeout(function () {
            responseMessage.textContent = "Thank you, " + name + "! Your message has been sent.";
            responseMessage.style.color = 'green';

      
            contactForm.reset();
        }, 1000);
    });

  
    function validateEmail(email) {
        const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return re.test(String(email).toLowerCase());
    }
});