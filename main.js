console.log("Script has started");

const email_form = document.getElementById("email_form");
const valid_email_alert = document.getElementById("valid_email_alert");

email_form.addEventListener('submit', (event) => {
    let email_input = document.getElementById("email_input");
    var mailFormat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    if (!email_input.value.match(mailFormat) || email_input.value.length == 0) {
        valid_email_alert.style.display = 'block';
        email_input.classList.replace("bg-white", "bg-red-200");
        email_input.classList.replace("text-dark", "text-red-800");
        email_input.classList.replace("border-dark-200", "border-red-700");
        setTimeout(() => {
            valid_email_alert.style.display = 'none';
        }, 3000);
        event.stopPropagation();
        return false;
    } else {
        event.preventDefault();
        email_input.classList.replace("bg-red-200","bg-white");
        email_input.classList.replace("text-red-800","text-dark");
        email_input.classList.replace("border-red-700", "border-dark-200");
        localStorage.setItem("email_submit", email_input.value);
        window.open("./Thank.html");
        return true;
    }
    event.preventDefault();
})