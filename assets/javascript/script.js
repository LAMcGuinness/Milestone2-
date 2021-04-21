// API used "https://thecocktaildb.com/api/json/v1/1/search.php?f=m"

/*cocktails.html*/
// fetch cocktails from json
fetch("https://thecocktaildb.com/api/json/v1/1/search.php?f=m")
    .then((response) => {
        return response.json()
    })


/* Contact.html */ 
// EmailJS to added for contact form
// Code is from https://dashboard.emailjs.com/admin/integration
// Constants for EmailJS
const btn = document.getElementById('submit');
const contactForm = document.getElementById('contact-form');
const userName = document.getElementById('from_name');

(function() {
  emailjs.init("user_kBVOjl06VneelQ0EvvvLQ");
});
window.onload = function(){
//event listener for submit
contactForm.addEventListener('submit', function(event){
  event.preventDefault();
  btn.value = "Sending"

  //send form details

  emailjs.sendForm("service_18idldn","template_35epc3x", "#myForm");
    then(function(response) {
        btn.value = 'Submit';
        setTimeout(() => { btn.disabled = true; }, 1000);
        alert(`Sent`);
        contactForm.reset();
        console.log('SUCCESS!', response.status, response.text);
    }, function(error)  {
        btn.value = 'Submit';
        btn.disabled = true;
        alert(alert(JSON.stringify(err)`Opps. Please try again`));
        console.log('FAILED...', error);
  });
  //stop
  return false;
})
}

   