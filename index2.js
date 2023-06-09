const email_submitted = document.querySelector(".email_submitted");
const dismiss_btn = document.querySelector("button");
const get_email_submit = localStorage.getItem("email_submit")
email_submitted.innerHTML = get_email_submit;

dismiss_btn.addEventListener("click", (event) => {
    localStorage.clear();
    event.preventDefault();
})