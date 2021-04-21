// API used "https://thecocktaildb.com/api/json/v1/1/search.php?f=m"

// fetch cocktails from json
fetch("https://thecocktaildb.com/api/json/v1/1/search.php?f=m")
    .then((response) => {
        return response.json()
    })



//Constants for EmailJS
 const btn = document.getElementById('submit');
 const contactForm = document.getElementById('contact-form');
 

// EmailJS to added for contact form
(function(){
  emailjs.init("user_kBVOjl06VneelQ0EvvvLQ");
})();

//send form details
emailjs.sendForm("service_18idldn","template_35epc3x", "contact-form")
    .then(function(response) {
      
       console.log('SUCCESS!', response.status, response.text);
    }, function(error) {
      
       console.log('FAILED...', error);
    });
   