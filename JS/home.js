const previous = document.getElementById("previous");
const next = document.getElementById("next");
let image = document.getElementById("timex-im");
let index = 0;
let arr = ["/Photos/timex1.png", "/Photos/timex2.webp", "/Photos/timex3.avif"];

previous.addEventListener("click", function() {
    index--;
    if (index < 0) {
        index = arr.length - 1; 
    }
    image.src = arr[index];
});

next.addEventListener("click", function() {
    index++;
    if (index >= arr.length) {
        index = 0; 
    }
    image.src = arr[index];
});


const previous1 = document.getElementById("previous1");
const next1 = document.getElementById("next1");

let image1 = document.getElementById("rolex-im");
let index1 = 0
let arr1 = ["/Photos/rolex1.png", "/Photos/rolex2.png", "/Photos/rolex3.png"];

previous1.addEventListener("click", function() {
    index1--;
    if (index1 < 0) {
        index1 = arr1.length - 1; 
    }
    image1.src = arr1[index1];
});

next1.addEventListener("click", function() {
    index1++;
    if (index1 >= arr1.length) {
        index1 = 0; 
    }
    image1.src = arr1[index1];
});

class Watch{
    constructor(company, model, year, price){
        this.company = company
        this.model = model
        this.year = year
        this.price = price
        
    }

    details(){
        console.log("This watch is made by: ", this.company)
        console.log("The model is: ", this.model)
        console.log("This watch was made in: ", this.year)
        console.log("This watch costs: ", this.price)
    }
}

class Rolex extends Watch{
    details(){
        super.details()
        console.log("This watch is made by the company: ", this.company)
        console.log("Rolex was created in: ", this.year)
        console.log("Rolex's price tags goes around: ", this.price)
    }
}

class Timex extends Watch{
    details(){
        super.details()
        console.log("This watch is made by company: ", this.company)
        console.log("Timex was created in: ", this.year)
        console.log("Timex's price tags goes around: ", this.price)
    }
}



let rolexWatch = new Watch("Rolex", "Oyster Perpetual", "1905", "65,500$");
let timexWatch = new Watch("Timex", "Waterbury Traditional", "1854", "200$");


rolexWatch.details();
timexWatch.details();





