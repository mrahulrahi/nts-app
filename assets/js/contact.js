(function () {
  emailjs.init("i3xy6tBlSjmaB8XCJ");
})();

function sendEmail() {
  let name = document.getElementById("form_name").value;
  let phone = document.getElementById("form_phone").value;
  let email = document.getElementById("form_email").value;
  let message = document.getElementById("form_message").value;

  var params = {
    form_name: name,
    form_phone: phone,
    form_email: email,
    form_message: message,
  };

  const serviceId = "service_gmail";
  const templateId = "template_contact";

  emailjs.send(serviceId, templateId, params).then(function (res) {
    alert("Sent Successfully", window.location.reload());
  });
}
