emailjs.init("0c4WLz8lGRYsnrDwU");

const sendBtn = document.querySelector('.send-button');
const result = document.querySelector('.result');

sendBtn.addEventListener('click', sendEmail);

function sendEmail() {
    const to = document.getElementById("to").value;
    const subject = document.getElementById("subject").value;
    const message = document.getElementById("message").value;

    emailjs.send("service_4ofobqh", "template_e43s60v", {
        to_email: to,
        subject: subject,
        message: message
    } )
    .then (function () {
        result.innerHTML = "Email sent successfully!";
        result.style.opacity = 1;
    }, function (error) {
        result.innerHTML = "Email sending failed!";
        result.style.opacity = 1;
    } );
}