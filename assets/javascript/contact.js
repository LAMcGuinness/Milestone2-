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


