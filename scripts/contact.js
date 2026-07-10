const emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

function validateInputOnBlur(event) {
  const input = event.target;
  let valid = false;

  if (input.id == "contact-name") valid = nameIsValid();
  else if (input.id == "contact-email") valid = emailIsValid();
  else if (input.id == "contact-msg") valid = messageIsValid();

  styleInput(input, valid);
  validateForm();
}

function validateForm() {
  const sendMsgBtn = document.getElementById("send-msg-btn");
  if (formIsValid()) sendMsgBtn.disabled = false;
  else sendMsgBtn.disabled = true;
}

function formIsValid() {
  return (
    nameIsValid() && emailIsValid() && messageIsValid() && checkboxIsValid()
  );
}

function nameIsValid() {
  const name = document.getElementById("contact-name").value;
  return name.length >= 2 && name.length <= 50;
}

function emailIsValid() {
  const email = document.getElementById("contact-email").value;
  return emailPattern.test(email);
}

function messageIsValid() {
  const message = document.getElementById("contact-msg").value;
  return message.length >= 10 && message.length <= 1000;
}

function validateCheckbox() {
  const checkboxWrapper = document.getElementById("accept-privacy-container");

  if (!checkboxIsValid()) checkboxWrapper.classList.add("input-invalid");
  else checkboxWrapper.classList.remove("input-invalid");

  validateForm();
}

function checkboxIsValid() {
  const checkbox = document.getElementById("contact-privacy-checkbox");
  return checkbox.checked;
}

function styleInput(input, valid) {
  const inputWrapper = input.closest(".input-wrapper");
  const icon = inputWrapper.querySelector(".input-icon");

  if (valid) styleValidInput(input, inputWrapper, icon);
  else styleInvalidInput(input, inputWrapper, icon);

  icon.style.display = "unset";
}

function styleValidInput(input, inputWrapper, icon) {
  inputWrapper.classList.add("input-valid");
  inputWrapper.classList.remove("input-invalid");
  icon.src = "./assets/icons/valid-input.svg";
}

function styleInvalidInput(input, inputWrapper, icon) {
  inputWrapper.classList.add("input-invalid");
  inputWrapper.classList.remove("input-valid");
  icon.src = "./assets/icons/invalid-input.svg";
}

function submitForm() {}

// POST Befehl

formJson = {
  name: "",
  email: "",
  message: "",
};
