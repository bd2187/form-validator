function validateForm(formId) {
  const formEl = document.querySelector(`#${formId}`);
  const inputEl = [...document.querySelectorAll(`#${formId} input`)];
  var inputVals = [];

  formEl.addEventListener("submit", function(evt) {
    evt.preventDefault();

    inputEl.forEach(function(element) {
      console.log(element.value);
    });
  });
}

validateForm("bio");
