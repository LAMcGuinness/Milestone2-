const btn = document.getElementById('submit');
const contactForm = document.getElementById('contact-form');
const userName = document.getElementById('fullname')

(function (){
    emailjs.init('user_kBVOjl06VneelQ0EvvvLQ')
})();

//add event listent for submit btn
contactForm.addEventListener('submit', function (event) {
        event.preventDefault();
        btn.value = 'Sending'


//send form details
    emailjs.sendForm("service_18idldn","template_35epc3x", "#myForm");
        then(() => {
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

});

