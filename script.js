console.log('script loaded')

document.addEventListener("DOMContentLoaded", function () {
    const elem = document.querySelector('input[name="foo"]');
    const datepicker = new Datepicker(elem, {
      // ...options
    });
});