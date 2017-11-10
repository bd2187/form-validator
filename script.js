function validateForm(formId) {
  const formEl = document.querySelector(`#${formId}`);
  const inputEls = [...document.querySelectorAll(`#${formId} input`)];

  formEl.addEventListener("submit", function(evt) {
    evt.preventDefault();

    var completedFields = 0;

    inputEls.forEach(function(element) {
      var inputValue = element.value.trim();

      if (inputValue) {
        completedFields++;
      }
    });

    if (completedFields === inputEls.length) {
      console.log("submit form");
      formEl.submit();
    } else {
      console.log("form incomplete");
    }
  });
}

validateForm("bio");
