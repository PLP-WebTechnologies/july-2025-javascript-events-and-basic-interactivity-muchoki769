const culturalDestinations = ["Nairobi National Museum", "Karen Blixen Museum", "Maasai Village", "Fort Jesus"];

//to handle the button click event
const button = document.getElementById("button")
button.addEventListener("click" , () => {
    alert("Form submitted")
})

const click = document.getElementById("places")
click.addEventListener ("mouseover", () => {
    alert(`Booking to go to ${culturalDestinations}`)
})


//to validate the username input field
const nameError = document.getElementById("nameError");
const username = document.getElementById("username");
username.oninput = function () {
    if (username.value.length < 3) {
        username.setCustomValidity("Username must be at least 3 characters long");
    } else {
        username.setCustomValidity("");
    }
}

//to validate the agenda input field
const agenda = document.getElementById("agenda");
agenda.oninput = function () {
    if (agenda.value.length < 3) {
        agenda.setCustomValidity("agenda must be at least 3 characters long");
    } else {
        agenda.setCustomValidity("");
    }
}

//to validate the email input field
const emailError = document.getElementById("emailError");
const email = document.getElementById("email");
function isValidEmail(email) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}


