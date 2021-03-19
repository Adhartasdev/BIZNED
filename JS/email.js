
emailjs.sendForm('service_t6ebdtl', 'BIZNED_contact_s2mvkmd', '#contactino')
    .then(function(response) {
       console.log("Your email has been succesfully sent!", response.status, response.text);
    }, function(error) {
       console.log('FAILED...', error);
    }
    );