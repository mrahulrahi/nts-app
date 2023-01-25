(function () {
  emailjs.init("i3xy6tBlSjmaB8XCJ");
})();

function bookCar() {
  let fullName = document.getElementById("book_name").value;
  let phoneNo = document.getElementById("book_phone").value;
  let pickupLocation = document.getElementById("book_pickup").value;
  let dropLocation = document.getElementById("book_drop").value;
  let dateTime = document.getElementById("book_datetime").value;
  let carType = document.getElementById("book_cartype").value;

  var params = {
    book_name: fullName,
    book_phone: phoneNo,
    book_pickup: pickupLocation,
    book_drop: dropLocation,
    book_datetime: dateTime,
    book_cartype: carType,
  };

  const serviceId = "service_gmail";
  const templateId = "template_book";

  emailjs.send(serviceId, templateId, params).then(function (res) {
    alert("Sent Successfully", window.location.reload());
  });
}
