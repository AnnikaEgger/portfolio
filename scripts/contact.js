/**
 * Regular expression used to validate email addresses.
 * @type {RegExp}
 */
const emailPattern =
  /^(?!.*\.\.)[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

/**
 * Validate a form field when its input or blur event fires and update the UI state.
 * @param {Event} event The input or blur event that triggered the validation.
 * @returns {void}
 */
function validateInput(event) {
  const input = event.target;
  if (event.type === "blur") input.value = input.value.trim();

  styleInputBasedOnValidity(input, event.type);
  styleSendButton();
}

/**
 * Determine whether the given input should be styled as valid or invalid.
 * @param {HTMLInputElement | HTMLTextAreaElement} input The input element to evaluate.
 * @param {string} eventType The event that triggered the validation update.
 * @returns {void}
 */
function styleInputBasedOnValidity(input, eventType) {
  let valid = false;

  if (input.id == "contact-name") valid = nameIsValid();
  else if (input.id == "contact-email") valid = emailIsValid();
  else if (input.id == "contact-msg") valid = messageIsValid();

  styleInput(input, valid, eventType);
}

/**
 * Handle the form submission flow by preventing the default behavior and validating the form.
 * @returns {void}
 */
function validateForm() {
  event.preventDefault();
  if (formIsValid()) submitForm();
  else {
    const inputs = [
      document.getElementById("contact-name"),
      document.getElementById("contact-email"),
      document.getElementById("contact-msg"),
    ];
    inputs.forEach((input) => {
      styleInputBasedOnValidity(input);
    });
    validateCheckbox();
  }
}

/**
 * Toggle the submit button state based on the current form validity.
 * @returns {void}
 */
function styleSendButton() {
  const sendMsgBtn = document.getElementById("send-msg-btn");
  if (formIsValid()) sendMsgBtn.classList.remove("disabled");
  else sendMsgBtn.classList.add("disabled");
}

/**
 * Check whether the contact form is currently valid.
 * @returns {boolean} True when all fields and the checkbox pass validation.
 */
function formIsValid() {
  return (
    nameIsValid() && emailIsValid() && messageIsValid() && checkboxIsValid()
  );
}

/**
 * Check whether the name field contains a valid length.
 * @returns {boolean} True when the name is between 2 and 50 characters long.
 */
function nameIsValid() {
  const name = document.getElementById("contact-name").value.trim();
  return name.length >= 2 && name.length <= 50;
}

/**
 * Check whether the email field matches the expected email format.
 * @returns {boolean} True when the email address is valid.
 */
function emailIsValid() {
  const email = document.getElementById("contact-email").value.trim();
  return emailPattern.test(email);
}

/**
 * Check whether the message field contains a valid length.
 * @returns {boolean} True when the message is between 10 and 1000 characters long.
 */
function messageIsValid() {
  const message = document.getElementById("contact-msg").value.trim();
  return message.length >= 10 && message.length <= 1000;
}

/**
 * Validate the privacy checkbox and update its visual state.
 * @returns {void}
 */
function validateCheckbox() {
  const checkboxWrapper = document.getElementById("accept-privacy-container");

  if (!checkboxIsValid()) checkboxWrapper.classList.add("input-invalid");
  else checkboxWrapper.classList.remove("input-invalid");

  styleSendButton();
}

/**
 * Check whether the privacy checkbox is selected.
 * @returns {boolean} True when the checkbox is checked.
 */
function checkboxIsValid() {
  const checkbox = document.getElementById("contact-privacy-checkbox");
  return checkbox.checked;
}

/**
 * Apply validation styling to an input based on its current state and event type.
 * @param {HTMLInputElement | HTMLTextAreaElement} input The input element to style.
 * @param {boolean} valid Whether the current value is valid.
 * @param {string} eventType The event that triggered the styling update.
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
 * Update the message-field error hint to match the current input length.
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
 * Apply the visual styling used for a valid input.
 * @param {HTMLInputElement | HTMLTextAreaElement} input The input element.
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
 * Apply the visual styling used for an invalid input.
 * @param {HTMLInputElement | HTMLTextAreaElement} input The input element.
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
 * Submit the form asynchronously and finalize the UI state afterward.
 * @returns {Promise<void>}
 */
async function submitForm() {
  const sendMsgBtn = document.getElementById("send-msg-btn");

  try {
    handleFormSubmit(sendMsgBtn);
  } catch (error) {
    onFailedSubmit(sendMsgBtn);
  }

  finalizeSubmission(sendMsgBtn);
}

/**
 * Reset the button and toast UI after a submission attempt completes.
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
 * Send the form payload to the server and handle the response.
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
 * POST the current form values as JSON to the server endpoint.
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
 * Collect the form field values into a plain object for JSON submission.
 * @returns {{name:string,email:string,message:string}} The form data payload.
 */
function getFormJson() {
  return {
    name: document.getElementById("contact-name").value.trim(),
    email: document.getElementById("contact-email").value.trim(),
    message: document.getElementById("contact-msg").value.trim(),
  };
}

/**
 * Handle a failed submission by showing feedback and re-enabling the button.
 * @param {HTMLElement} sendMsgBtn The send button element.
 * @returns {void}
 */
function onFailedSubmit(sendMsgBtn) {
  showToastMsg(false);
  sendMsgBtn.disabled = false;
}

/**
 * Reset the contact form and clear any validation styling.
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
 * Show a toast message that reflects whether the submission succeeded.
 * @param {boolean} successful Whether the submission was successful.
 * @returns {void}
 */
function showToastMsg(successful) {
  const toastMsg = document.getElementById("contact-form-toast-msg");
  if (successful) styleSuccessMsg(toastMsg);
  else styleFailedMsg(toastMsg);
}

/**
 * Apply the styling and text for a successful submission toast.
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
 * Apply the styling and text for a failed submission toast.
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
