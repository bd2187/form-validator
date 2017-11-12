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
  const errorEl = document.querySelector(".error");

  // Add submit event to form element
  formEl.addEventListener("submit", function(evt) {
    evt.preventDefault();
    var formErrors = [];

    // Array of radio button elements
    // var radioButtons = inputEls.filter(function(element) {
    //   if (element.type === "radio") {
    //     return element;
    //   }
    // });

    /*
    *
    * Iterate over each input field to see if it's empty.
    * If empty, push the element's placeholder attr to the formErrors array.
    *
    */
    inputEls.forEach(function(element) {
      var inputValue = element.value.trim();
      var inputType = element.getAttribute("type");

      if (inputType === "text" && inputValue === "") {
        formErrors.push(element.getAttribute("placeholder"));
      } else if (inputType === "tel" && inputValue === "") {
        formErrors.push(element.getAttribute("placeholder"));
      }
    });

    // Iterate over radio buttons array to check if at least one is checked
    // radioButtons.forEach(function(element) {
    //   if (element.checked === false) {
    //     formErrors.push(element.name);
    //   }
    // });

    // var removedDuplicateErrors = formErrors.filter(function(
    //   error,
    //   index,
    //   self
    // ) {
    //   return index === self.indexOf(error);
    // });

    // console.log(removedDuplicateErrors);
    console.log(formErrors);

    // If the formErrors array is empty, submit the form, otherwise, display error message
    if (formErrors.length === 0) {
      console.log("form complete");
      // formEl.submit();
    } else {
      errorEl.style.display = "block";
      console.log("form incomplete");
    }
  });
}

validateForm("bio");
