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

async function submitForm() {
  event.preventDefault();

  const name = document.getElementById("contact-name").value;
  const email = document.getElementById("contact-email").value;
  const message = document.getElementById("contact-msg").value;
  const sendMsgBtn = document.getElementById("send-msg-btn");
  const toastMsg = document.getElementById("contact-form-toast-msg");

  formJson = {
    name: name,
    email: email,
    message: message,
  };

  try {
    sendMsgBtn.disabled = true;
    sendMsgBtn.classList.add("waiting-for-response");
    const response = await fetch("contact-form-mail.php", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formJson),
    });
    if (response.ok) {
      showToastMsg(true);
      clearForm();
    } else {
      showToastMsg(false);
      sendMsgBtn.disabled = false;

      console.log(response);
    }
  } catch (error) {
    showToastMsg(false);
    sendMsgBtn.disabled = false;
  }
  sendMsgBtn.classList.remove("waiting-for-response");

  setTimeout(() => {
    toastMsg.classList.remove("form-submit");
  }, 3000);
}

function clearForm() {
  const contactForm = document.getElementById("contact-form");
  const sendMsgBtn = document.getElementById("send-msg-btn");

  contactForm.reset();

  contactForm.querySelectorAll(".input-valid").forEach((input) => {
    input.classList.remove("input-valid");
  });
  contactForm.querySelectorAll(".input-icon").forEach((icon) => {
    icon.style.display = "none";
  });

  sendMsgBtn.disabled = true;
}

function showToastMsg(successful) {
  const toastMsg = document.getElementById("contact-form-toast-msg");

  if (successful) {
    toastMsg.classList.remove("invalid-submit");
    toastMsg.classList.add("valid-submit", "form-submit");

    if (language == "german")
      toastMsg.textContent = "Nachricht erfolgreich gesendet";
    else toastMsg.textContent = "message sent successfully";
  } else {
    toastMsg.classList.remove("valid-submit");
    toastMsg.classList.add("invalid-submit", "form-submit");

    if (language == "german")
      toastMsg.textContent =
        "Fehler beim Senden. Bitte versuche es noch einmal.";
    else toastMsg.textContent = "Failed to send message. Please try again.";
  }
}
