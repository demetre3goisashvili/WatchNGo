let submit = document.getElementById("credit-sub");
let card = document.getElementById("num");

submit.addEventListener("click", function(event) {
    event.preventDefault(); // საიტი არ განახლდება საბმითზე დაკლიკების შემდეგ
    
    let existingMessage = document.getElementById("error-message");
    
    if (card.value.length < 16) {  //
        if (!existingMessage) {
            let errorMessage = document.createElement("p");
            errorMessage.textContent = "Card Number must contain 16 digits";
            errorMessage.id = "error-message";
            errorMessage.style.color = "red";
            card.parentNode.insertBefore(errorMessage, submit); 
        }
    } else {
        if (existingMessage) {
            existingMessage.remove();
        }
    }




    setTimeout(function() { // საბმით ღილაკზე 3 წამიანი დილეი
    }, 3000);
});