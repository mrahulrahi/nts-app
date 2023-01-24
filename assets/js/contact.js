function sendMail() {
  var params = {
    form_name: document.getElementById("form_name").value,
    form_email: document.getElementById("form_email").value,
    form_subject: document.getElementById("form_subject").value,
    form_message: document.getElementById("form_message").value,
  };
  emailjs
    .send("service_o3uij72", "template_fg4x4p7", params)
    .then(function (res) {
      alert("Success! " + res.status);
    });
}
