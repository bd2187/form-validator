/*
* Function validates form
*
* @param formId-- This should be the id of the form. e.g. "bio"
*
* @return
*/

function validateForm(formId) {
  // Select DOM elements
  const formEl = document.querySelector(`#${formId}`);
  const inputEls = [...document.querySelectorAll(`#${formId} input`)];

  // On form submission, iterate over the input values and check if fields are empty.
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
      // formEl.submit();
    } else {
      console.log("form incomplete");
    }
  });
}

validateForm("bio");
