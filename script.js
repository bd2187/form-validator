function validateForm(formId) {
  const formEl = document.querySelector(`#${formId}`);
  const inputEl = document.querySelectorAll(`#${formId} input`);
  var inputVals = [];

  formEl.addEventListener("submit", function(evt) {
    evt.preventDefault();

    for (let i = 0; i < inputEl.length; i++) {
      console.log(inputEl[i].value);
    }
  });
}

validateForm("bio");
