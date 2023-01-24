function sendMail() {
  var params = {
    form_name: document.getElementById("form_name").value,
    form_email: document.getElementById("form_email").value,
    form_subject: document.getElementById("form_subject").value,
    form_message: document.getElementById("form_message").value,
  };

  const serviceID = "service_o3uij72";
  const templateID = "template_cihtuic";

  emailjs
    .send(serviceID, templateID, params)
    .then((res) => {
      (document.getElementById("form_name").value = ""),
        (document.getElementById("form_email").value = ""),
        (document.getElementById("form_subject").value = ""),
        (document.getElementById("form_message").value = ""),
        console.log(res);
      alert("Your message sent successfully");
    })
    .catch((err) => console.log(err));
}
