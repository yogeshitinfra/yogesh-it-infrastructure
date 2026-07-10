emailjs.init("TlU-DcrSvloKgM97M");

const form = document.getElementById("contact-form");

form.addEventListener("submit", function(e) {
    e.preventDefault();

    emailjs.sendForm(
        "service_hzmm3sg",
        "template_tis4anc",
        this
    ).then(function() {
        alert("Message Sent Successfully!");
        form.reset();
    }, function(error) {
        alert("Failed to send message.");
        console.log(error);
    });
});
const menuToggle = document.getElementById("menu-toggle");
const nav = document.querySelector("nav");

menuToggle.addEventListener("click", function () {
    nav.classList.toggle("active");
});
