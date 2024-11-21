let submit = document.getElementById("sub");
let pass = document.getElementById("pass");
let repass = document.getElementById("repass");
let email = document.getElementById("em")

submit.addEventListener("click", function(event) {
    event.preventDefault(); // ამის მეშვეობით საიტი არ დარესტარტდება საბმითზე დაკლიკების შემდეგ
    
    let existingMessage = document.getElementById("error-message"); // 

    if (repass.value !== pass.value) {
        if (!existingMessage) {
            let repeat = document.createElement("p");
            repeat.textContent = "The passwords don't match, try again.";
            repeat.id = "error-message"; // ჩვენ ამ მესიჯს მივანიჭებთ id თუ საიტზე ეს აიდი დაფიქსირდება ავტომატიკურად წაიშლება
            repeat.style.color = "red";
            repass.parentNode.insertBefore(repeat, submit);
        }
    } else {
        // 
        if (existingMessage) { // ამით ვშლით ზედმეტ მესიჯებს
            existingMessage.remove();
        }

        // 
    }

    let existingEmailMessage = document.getElementById("error-message-email");
    if (!email.value.includes("@")) {
        if (!existingMessage) {
            let errorMessage = document.createElement("p");
            errorMessage.textContent = "Invalid email address. Please include '@'.";
            errorMessage.id = "error-message"; 
            errorMessage.style.color = "red";
            email.parentNode.insertBefore(errorMessage, submit);
        }
    } else {
       
        if (existingEmailMessage) {
            existingEmailMessage.remove();
        }
    }
    setTimeout(function() { // საბმით ღილაკზე დაკლიკებისას 3 წამიანი დილეი რათა მომხმარებელმა წაიკითხოს კოდი
        location.reload();
    }, 3000); // 
});