
let slides = document.getElementsByClassName("rolexi");

for (let i = 0; i < slides.length; i++) {
    let originalSrc = slides[i].src
    slides[i].addEventListener("mouseover", function() {
        slides[i].src = "/Photos/sub-hover.png";
    });
    slides[i].addEventListener("mouseout", function(){
        slides[i].src = originalSrc
    })

}

let slides1 = document.getElementsByClassName("rolexii");

for (let i = 0; i < slides1.length; i++) {
    let originalSrc = slides1[i].src
    slides1[i].addEventListener("mouseover", function() {
        slides1[i].src = "/Photos/datejust-hover.png";
    });
    slides1[i].addEventListener("mouseout", function(){
        slides1[i].src = originalSrc
    })

}


let slide2 = document.getElementsByClassName("ygdiamond");

for (let i = 0; i < slide2.length; i++) {
    let originalSrc = slide2[i].src;  
    slide2[i].addEventListener("mouseover", function() {
        slide2[i].src = "/Photos/ygdiamond-hover.png";
    });
    slide2[i].addEventListener("mouseout", function() {
        slide2[i].src = originalSrc;
    });
}

let slides3 = document.getElementsByClassName("daydate");


for (let i = 0; i < slides3.length; i++) {
    let originalSrc = slides3[i].src;  
    slides3[i].addEventListener("mouseover", function() {
        slides3[i].src = "/Photos/date-hover.png";
    });
    slides3[i].addEventListener("mouseout", function() {
        slides3[i].src = originalSrc;
    });
}

let slides4 = document.getElementsByClassName("timexi");

for (let i = 0; i < slides4.length; i++) {
    let originalSrc = slides4[i].src
    slides4[i].addEventListener("mouseover", function() {
        slides4[i].src = "/Photos/timhover1.png";
    });
    slides4[i].addEventListener("mouseout", function(){
        slides4[i].src = originalSrc
    })

}

let slides5 = document.getElementsByClassName("timexii");

for (let i = 0; i < slides5.length; i++) {
    let originalSrc = slides5[i].src
    slides5[i].addEventListener("mouseover", function() {
        slides5[i].src = "/Photos/timexhover2.png";
    });
    slides5[i].addEventListener("mouseout", function(){
        slides5[i].src = originalSrc
    })

}

let slides6 = document.getElementsByClassName("platinum");

for (let i = 0; i < slides6.length; i++) {
    let originalSrc = slides6[i].src
    slides6[i].addEventListener("mouseover", function() {
        slides6[i].src = "/Photos/timexhover3.png";
    });
    slides6[i].addEventListener("mouseout", function(){
        slides6[i].src = originalSrc
    })

}

let slides7 = document.getElementsByClassName("silver");

for (let i = 0; i < slides7.length; i++) {
    let originalSrc = slides7[i].src
    slides7[i].addEventListener("mouseover", function() {
        slides7[i].src = "/Photos/timexhover4.png";
    });
    slides7[i].addEventListener("mouseout", function(){
        slides7[i].src = originalSrc
    })

}



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

class Submarine extends Rolex{
    details(){
        console.log("Submarine is made by: ", this.company)
        console.log("The model is: ", this.model)
        console.log("Submarine was made in: ", this.year)
        console.log("Submarine costs: ", this.price)
    }
}

class DateJust extends Rolex{
    details(){
        console.log("DateJust is made by: ", this.company)
        console.log("The model is: ", this.model)
        console.log("DateJust was made in: ", this.year)
        console.log("DateJust costs: ", this.price)
    }
}

class YgDiamond extends Rolex{
    details(){
        console.log("YG Diamond is made by: ", this.company)
        console.log("The model is: ", this.model)
        console.log("YG Diamond was made in: ", this.year)
        console.log("YG Diamond costs: ", this.price)
    }
}

class DayDate extends Rolex{
    details(){
        console.log("Day Date is made by: ", this.company)
        console.log("The model is: ", this.model)
        console.log("Day Date was made in: ", this.year)
        console.log("Day Date costs: ", this.price)
    }
}



class Gold extends Timex{
    details(){
        console.log("Timex Gold is made by: ", this.company)
        console.log("The model is: ", this.model)
        console.log("Timex Gold was made in: ", this.year)
        console.log("Gold costs: ", this.price)
    }
}

class Automatic extends Timex{
    details(){
        console.log("Timex Automatix is made by: ", this.company)
        console.log("The model is: ", this.model)
        console.log("Timex Automatic was made in: ", this.year)
        console.log("Autoatic costs: ", this.price)
    }
}

class Platinum extends Timex{
    details(){
        console.log("Timex Platinum is made by: ", this.company)
        console.log("The model is: ", this.model)
        console.log("Timex Platinum was made in: ", this.year)
        console.log("Platinum costs: ", this.price)
    }
}

class Silver extends Timex{
    details(){
        console.log("Timex Silver is made by: ", this.company)
        console.log("The model is: ", this.model)
        console.log("Timex Silver was made in: ", this.year)
        console.log("Silver costs: ", this.price)
    }
}






