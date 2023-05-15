const input = document.querySelector("#validation-input");
const dataLength = input.getAttribute("data-length");

function onInputBlur(event) {
const value = event.currentTarget.value;
const isValid = value.length === Number(dataLength);

if (isValid) {
input.classList.remove("invalid");
input.classList.add("valid");
} else {
input.classList.remove("valid");
input.classList.add("invalid");
}
}

input.addEventListener("blur", onInputBlur);