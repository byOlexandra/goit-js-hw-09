const refs = {
    form: document.querySelector(".feedback-form"),
    input: document.querySelectorAll("input"),
    textarea: document.querySelector("textarea")
}

const formData = {
    email: "",
    message: "",
}

refs.form.addEventListener("input", e => {
    const data = new FormData(refs.form);
    formData.email = data.get("email") || "";
    formData.message = data.get("message") || "";
    localStorage.setItem("feedback-form-state", JSON.stringify(formData));    
})

document.addEventListener("DOMContentLoaded", e => {
    const data = localStorage.getItem("feedback-form-state");
    if (data) {
        const parsedData = JSON.parse(data);
        refs.form.elements.email.value = parsedData.email || "";
        refs.form.elements.message.value = parsedData.message || "";
    }
})

refs.form.addEventListener("submit", e => {
    e.preventDefault()
    if (formData.email === "" || formData.message === "") {
        alert('Fill please all fields')
    } else {
        console.log(formData);
        localStorage.removeItem("feedback-form-state");
        formData.email = "";
        formData.message = "";
        refs.form.reset();
    }
})