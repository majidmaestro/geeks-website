const header = document.querySelector("header");
header.style.backgroundColor = "blue";


const button = document.querySelector("#submit-button");
button.addEventListener("click",(event) => {
    // prevent form from refreshing itself
    event.preventDefault();
    // retrieve value from the form 
    const fullName = document.querySelector("#full-name").value;

const email = document.querySelector("#email").value;
const message = document.querySelector("#message").value;

console.log(fullName);
console.log(email);
console.log(message);
});
