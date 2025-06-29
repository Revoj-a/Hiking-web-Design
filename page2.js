var nameError = document.getElementById("name-error");
var contactError = document.getElementById("contact-error");
var emailError = document.getElementById("email-error");
var messageError = document.getElementById("message-error");
var submitError = document.getElementById("submit-error");

function validateName() {
  var name = document.getElementById("contact-name").value;

  if (name.length == 0) {
    nameError.innerHTML = "Name is required";
    return false;
  }
  if (!name.match(/^[A-Za-z]*\s{1}[A-Za-z]*$/)) {
    nameError.innerHTML = "Write Full Name";
    return false;
  }
  nameError.innerHTML = '<i class="fa-solid fa-circle-check"></i>';
  return true;
}

function validateContact() {
  var contact = document.getElementById("contact-number").value;

  if (contact.length == 0) {
    contactError.innerHTML = "Contact number is required";
    return false;
  }
  if (contact.length !== 11) {
    contactError.innerHTML = "Contact number should be 11 digits";
    return false;
  }
  if (!contact.match(/^[0-9]{11}$/)) {
    contactError.innerHTML = "Invalid contact number";
    return false;
  }
  contactError.innerHTML = '<i class="fa-solid fa-circle-check"></i>';
  return true;
}

function validateEmail() {
  var email = document.getElementById("contact-email").value;

  if (email.length == 0) {
    emailError.innerHTML = "Email is required";
    return false;
  }
  if (!email.match(/^[A-Za-z\.\-[0-9]*[@][A-Za-z]*[\.][a-z]{2,4}$/)) {
    emailError.innerHTML = "Invalid Email";
    return false;
  }
  emailError.innerHTML = '<i class="fa-solid fa-circle-check"></i>';
  return true;
}

function validateMessage() {
  var message = document.getElementById("contact-message").value;
  var required = 100;
  var left = required - message.length;

  if (left > 0) {
    messageError.innerHTML = left + " Complete the comment";
    return false;
  }
  messageError.innerHTML = '<i class="fa-solid fa-circle-check"></i>';
  return true;
}

document.getElementById("myForm").addEventListener("submit", function (event) {
  event.preventDefault();
  if (validateForm()) {
    alert("Form submitted successfully!");
    nameError.innerHTML = "";
    contactError.innerHTML = "";
    emailError.innerHTML = "";
    messageError.innerHTML = "";
    this.reset();
  } else {
    alert("Form failed");
  }
});

function validateForm() {
  if (
    !validateName() ||
    !validateContact() ||
    !validateEmail() ||
    !validateMessage()
  ) {
    submitError.style.display = "block";
    submitError.innerHTML = "Complete the Form to submit";
    setTimeout(function () {
      submitError.style.display = "none";
    }, 3000);
    return false;
  }
  return true;
}

function initAnimations() {
  let images = document.querySelectorAll(".image-to-animate");

  images.forEach(function (image, index) {
    setTimeout(function () {
      image.classList.add("animate-image");
    }, index * 700);
  });
}

document.addEventListener("DOMContentLoaded", function () {
  initAnimations();
});
