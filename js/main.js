// starting skills trick
let ourSkills = document.querySelector(".skills")

window.onscroll  = function () {

    //window height 
    let windowHeight = window.innerHeight;
    // console.log(windowHeight);

    //our skills height 
    let ourSkillsHeight = ourSkills.offsetHeight;
    // console.log(ourSkillsHeight);

    //our skills offest top
    let ourSkillsTop = ourSkills.offsetTop;
    // console.log(ourSkillsTop);

    //al7ata ale ana 3mltlha scroll 
    let windowScrolled = window.pageYOffset;
    // console.log(windowScrolled);

    if (windowScrolled > (ourSkillsTop + ourSkillsHeight - windowHeight)) {
        // console.log("congrats u have been riched your goal")
        let ourSkillSpans = document.querySelectorAll(".the-progress span")

        ourSkillSpans.forEach (span => {
            span.style.width = span.dataset.progrees
        })
    }
}
// End skills trick
//starting gallery trick

// slecting all imgs in gallery
let imgsList = document.querySelectorAll(".gallery img")
// looping in all imgs
imgsList.forEach( img => {
    img.addEventListener("click" , function(e) {
        // creating element
        let popupOverlay = document.createElement("div");
        //add class
        popupOverlay.className = "over-lay"
        document.body.appendChild(popupOverlay)
        //end of over-lay
        //creating popup
        let popup = document.createElement("div")
        //adding class
        popup.className = "popup";

        // create closing span
        let closingSpan = document.createElement("span")
        let closingSpanText = document.createTextNode("X")
        closingSpan.appendChild(closingSpanText)
        popup.appendChild(closingSpan)
        closingSpan.addEventListener("click" , function (e) {
            e.target.parentNode.remove() 
            document.querySelector(".over-lay").remove()
        })

        if (img.alt !== null) {
            //creating heading
            let popuphead = document.createElement("h3")
            let headtext = document.createTextNode(img.alt)
            popuphead.appendChild(headtext)
            popup.appendChild(popuphead)
            // console.log(popup)
        }

        //create img
        let myImg = document.createElement("img")
        myImg.src = img.src 
        // appending img and popup
        popup.appendChild(myImg)
        document.body.appendChild(popup)
        // console.log(popup)
    })
})
//End gallery trick

// start counterdown
setInterval( function () {
    let countdown = new Date("Dec 31 , 2022 23:59:59").getTime() // time from beginng to that date
    let dateNow = new Date().getTime() // time from beginng to now
    let dateDiff = countdown - dateNow // the diffrence between them give u the time u want

    // days work
    let days = Math.floor(dateDiff / (1000*60*60*24))
    document.querySelector(".days>span").innerHTML = days

    //hours work
    let hours = Math.floor((dateDiff % (1000*60*60*24)) / (1000*60*60))
    document.querySelector(".hours>span").innerHTML = hours

    //minutes work 
    let minutes =  Math.floor(((dateDiff % (1000*60*60*24)) % (1000*60*60)) / (1000*60))
    document.querySelector(".minutes>span").innerHTML = minutes

    // seconds work
    let seconds = Math.floor((((dateDiff % (1000*60*60*24)) % (1000*60*60)) % (1000*60)) / 1000 )
    document.querySelector(".seconds>span").innerHTML = seconds

} , 1000)
//End counterdown

// strat megamenu click
const lastItemInulLinks = document.querySelector(".container ul.sp li:last-of-type");
const megamenu = document.querySelector(".mega-menu");

lastItemInulLinks.addEventListener("click" , function () {
    megamenu.classList.toggle("open")
})
// End megamenu click
// start fixed bulltes
const allBullets = document.querySelectorAll(".container .nav-bullets");

// console.log(allBullets)
allBullets.forEach( bullet => {
    bullet.addEventListener("click" , function (e) {
        document.querySelector(e.target.dataset.bullet).scrollIntoView({
            behavior: "smooth"
        
        });
    });
});

// End fixed bulltes


// start dark mode
const icon = document.querySelector("header .icon")

icon.onclick = function() {
    document.body.classList.toggle("dark-mode")
    
    if (document.body.classList.contains("dark-mode")) {
        icon.src = "images/sun.png";
    }
    else{
        icon.src = "images/moon.png"
    }
}
// End dark mode

// strat work section
const bigImg = document.querySelector(".mainImg");
const smallImgs = document.querySelectorAll(".work .container .content .seconImg");

smallImgs.forEach(smallImg => {
    smallImg.addEventListener("click" , function() {
        bigImg.src = smallImg.src
    })
})
// End work section

//start testmonail section
const allStars = document.querySelectorAll(".teastmonial i")
allStars.forEach( star => {
    star.addEventListener("click" , function (e) {
        if (e.target.classList.contains("far")) {
            e.target.classList.remove("far") 
            e.target.classList.add("filled")
            e.target.classList.add("fas")
            // console.log(e.target)
        } else {
            e.target.classList.remove("filled");
            e.target.classList.remove("fas");
            e.target.classList.add("far")
        }
    })
})
//End testmonail section

// start form
const loginButton = document.querySelector(".login");
const createButton = document.querySelector(".create-mail");
const loginForm = document.querySelector(".account")
const createForm = document.querySelector(".no-account")
loginButton.onclick = function () {
    loginForm.style.display = "block"
    createForm.style.display = "none"
}
createButton.onclick = function () {
    loginForm.style.display = "none"
    createForm.style.display = "block"
}
// End form
