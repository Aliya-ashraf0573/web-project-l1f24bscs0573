
const form = document.getElementById("contactForm");
const message = document.getElementById("message");
const charCount = document.getElementById("charCount");
const formStatus = document.getElementById("formStatus");/


message.addEventListener("input", function () {
    charCount.textContent =
        message.value.length + " / 300 characters";
});


form.addEventListener("submit", function (event) {

    event.preventDefault();

    if (form.checkValidity()) {

        formStatus.textContent =
            "Thank you! Your message has been submitted successfully.";

        formStatus.style.color = "green";

        form.reset();

        charCount.textContent = "0 / 300 characters";

    } else {
        form.reportValidity();
    }
});
