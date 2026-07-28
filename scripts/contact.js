/**
 * Regular expression used to validate email addresses.
 * @type {RegExp}
 */
const emailPattern =
  /^(?!.*\.\.)[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

/**
 * Validate a single input when it loses focus and update styles.
 * @param {Event} event Blur event from the input element.
 * @returns {void}
 */
function validateInput(event) {
  const input = event.target;
  let valid = false;

  if (input.id == "contact-name") valid = nameIsValid();
  else if (input.id == "contact-email") valid = emailIsValid();
  else if (input.id == "contact-msg") valid = messageIsValid();

  styleInput(input, valid, event.type);
  validateForm();
}

/**
 * Enable or disable the send button depending on form validity.
 * @returns {void}
 */
function validateForm() {
  const sendMsgBtn = document.getElementById("send-msg-btn");
  if (formIsValid()) sendMsgBtn.disabled = false;
  else sendMsgBtn.disabled = true;
}

/**
 * Check whether the contact form is valid.
 * @returns {boolean} True when all fields and the checkbox are valid.
 */
function formIsValid() {
  return (
    nameIsValid() && emailIsValid() && messageIsValid() && checkboxIsValid()
  );
}

/**
 * Validate the name input length.
 * @returns {boolean} True when name length is between 2 and 50.
 */
function nameIsValid() {
  const name = document.getElementById("contact-name").value.trim();
  console.log(name);

  return name.length >= 2 && name.length <= 50;
}

/**
 * Validate the email input against `emailPattern`.
 * @returns {boolean} True when email matches the pattern.
 */
function emailIsValid() {
  const email = document.getElementById("contact-email").value.trim();
  return emailPattern.test(email);
}

/**
 * Validate the message input length.
 * @returns {boolean} True when message length is between 10 and 1000.
 */
function messageIsValid() {
  const message = document.getElementById("contact-msg").value.trim();
  return message.length >= 10 && message.length <= 1000;
}

/**
 * Validate the privacy checkbox and apply invalid styling if needed.
 * @returns {void}
 */
function validateCheckbox() {
  const checkboxWrapper = document.getElementById("accept-privacy-container");

  if (!checkboxIsValid()) checkboxWrapper.classList.add("input-invalid");
  else checkboxWrapper.classList.remove("input-invalid");

  validateForm();
}

/**
 * Return whether the privacy checkbox is checked.
 * @returns {boolean}
 */
function checkboxIsValid() {
  const checkbox = document.getElementById("contact-privacy-checkbox");
  return checkbox.checked;
}

/**
 * Update the visual state of an input based on its validation result.
 * @param {HTMLInputElement | HTMLTextAreaElement} input The input element to style.
 * @param {boolean} valid Whether the current value is valid.
 * @param {string} eventType The event type that triggered the validation update.
 * @returns {void}
 */
function styleInput(input, valid, eventType) {
  const inputWrapper = input.closest(".input-wrapper");
  const icon = inputWrapper.querySelector(".input-icon");

  if (valid) {
    styleValidInput(input, inputWrapper, icon);
  } else if (!valid) {
    if (eventType === "input") removeValidInputStyle(input, inputWrapper, icon);
    else {
      styleInvalidInput(input, inputWrapper, icon);
      if (inputWrapper.id === "input-wrapper-msg")
        showCorrectErrorMsgMessageInput();
    }
  }
}

/**
 * Update the error message text for the message field based on its current length.
 * @returns {void}
 */
function showCorrectErrorMsgMessageInput() {
  const message = document.getElementById("contact-msg").value.trim();
  errorMsg = document.getElementById("error-msg--message");

  if (message.length === 0) {
    if (language === "german")
      errorMsg.textContent = "Bitte gib eine Nachricht ein.";
    else errorMsg.textContent = "Please enter a message.";
  } else if (message.length < 10) {
    if (language === "german")
      errorMsg.textContent = "Bitte gib mindestens 10 Zeichen ein.";
    else errorMsg.textContent = "Please enter at least 10 characters.";
  }
}

/**
 * Remove the success styling from an input wrapper and its icon.
 * @param {HTMLInputElement | HTMLTextAreaElement} input The input element whose valid styling should be cleared.
 * @param {HTMLElement} inputWrapper The wrapper element associated with the input.
 * @param {HTMLImageElement} icon The status icon element displayed for validation feedback.
 * @returns {void}
 */
function removeValidInputStyle(input, inputWrapper, icon) {
  if (inputWrapper.classList.contains("input-valid")) {
    inputWrapper.classList.remove("input-valid");
    icon.classList.remove("visible");
  }
}

/**
 * Apply the 'valid' styles to an input wrapper and icon.
 * @param {HTMLElement} input The input element.
 * @param {HTMLElement} inputWrapper The wrapper element for the input.
 * @param {HTMLImageElement} icon The status icon element.
 * @returns {void}
 */
function styleValidInput(input, inputWrapper, icon) {
  inputWrapper.classList.add("input-valid");
  inputWrapper.classList.remove("input-invalid");
  icon.src = "./assets/icons/valid-input.svg";
  icon.classList.add("visible");
}

/**
 * Apply the 'invalid' styles to an input wrapper and icon.
 * @param {HTMLElement} input The input element.
 * @param {HTMLElement} inputWrapper The wrapper element for the input.
 * @param {HTMLImageElement} icon The status icon element.
 * @returns {void}
 */
function styleInvalidInput(input, inputWrapper, icon) {
  inputWrapper.classList.add("input-invalid");
  inputWrapper.classList.remove("input-valid");
  icon.src = "./assets/icons/invalid-input.svg";
  icon.classList.add("visible");
}

/**
 * Handle the form submit event: prevent default, submit and finalize.
 * Note: relies on the global `event` object from the handler.
 * @returns {Promise<void>}
 */
async function submitForm() {
  const sendMsgBtn = document.getElementById("send-msg-btn");
  event.preventDefault();

  try {
    handleFormSubmit(sendMsgBtn);
  } catch (error) {
    onFailedSubmit(sendMsgBtn);
  }

  finalizeSubmission(sendMsgBtn);
}

/**
 * Final UI updates after submitting (successful or failed).
 * @param {HTMLElement} sendMsgBtn The send button element.
 * @returns {void}
 */
function finalizeSubmission(sendMsgBtn) {
  const toastMsg = document.getElementById("contact-form-toast-msg");

  sendMsgBtn.classList.remove("waiting-for-response");
  setTimeout(() => {
    toastMsg.classList.remove("form-submit");
  }, 3000);
}

/**
 * Send form payload to the server and handle the response.
 * @param {HTMLElement} sendMsgBtn The send button element.
 * @returns {Promise<void>}
 */
async function handleFormSubmit(sendMsgBtn) {
  sendMsgBtn.disabled = true;
  sendMsgBtn.classList.add("waiting-for-response");

  const response = await postFormJson();

  if (response.ok) {
    showToastMsg(true);
    clearForm();
  } else onFailedSubmit(sendMsgBtn);
}

/**
 * POST the form JSON to the server endpoint.
 * @returns {Promise<Response>} Fetch response promise.
 */
async function postFormJson() {
  return await fetch("contact-form-mail.php", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(getFormJson()),
  });
}

/**
 * Collect form values into a plain object for JSON submission.
 * @returns {{name:string,email:string,message:string}}
 */
function getFormJson() {
  return {
    name: document.getElementById("contact-name").value.trim(),
    email: document.getElementById("contact-email").value.trim(),
    message: document.getElementById("contact-msg").value.trim(),
  };
}

/**
 * Handle a failed submit by showing a toast and re-enabling the button.
 * @param {HTMLElement} sendMsgBtn The send button element.
 * @returns {void}
 */
function onFailedSubmit(sendMsgBtn) {
  showToastMsg(false);
  sendMsgBtn.disabled = false;
}

/**
 * Reset the contact form and clear validation states.
 * @returns {void}
 */
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

/**
 * Show a toast message indicating submit success or failure.
 * @param {boolean} successful Whether the submission was successful.
 * @returns {void}
 */
function showToastMsg(successful) {
  const toastMsg = document.getElementById("contact-form-toast-msg");
  if (successful) styleSuccessMsg(toastMsg);
  else styleFailedMsg(toastMsg);
}

/**
 * Style and set text for a successful submission toast.
 * @param {HTMLElement} toastMsg The toast message element.
 * @returns {void}
 */
function styleSuccessMsg(toastMsg) {
  toastMsg.classList.remove("invalid-submit");
  toastMsg.classList.add("valid-submit", "form-submit");

  if (language == "german")
    toastMsg.textContent = "Nachricht erfolgreich gesendet";
  else toastMsg.textContent = "message sent successfully";
}

/**
 * Style and set text for a failed submission toast.
 * @param {HTMLElement} toastMsg The toast message element.
 * @returns {void}
 */
function styleFailedMsg(toastMsg) {
  toastMsg.classList.remove("valid-submit");
  toastMsg.classList.add("invalid-submit", "form-submit");

  if (language == "german")
    toastMsg.textContent = "Fehler beim Senden. Bitte versuche es noch einmal.";
  else toastMsg.textContent = "Failed to send message. Please try again.";
}
