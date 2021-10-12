let headshots = document.querySelectorAll(".Headshot")
console.log(headshots)

let customerNames = document.querySelectorAll(".CustomerName")
let emails = document.querySelectorAll(".email")
let locations = document.querySelectorAll(".location")
let DOBs = document.querySelectorAll(".DOB")

//When the page loads
//Headshot to be poplulated from customer.js to <img>
//CustomerName to be populated from customer.js to <h3>
//email to be populated from customer.js to <p>
//location to be populated from customer.js to <p>
//DOB to be populated from customer.js to <p>

let counter = 0;
window.addEventListener('load', () => {
    for (let headshot of headshots) {
        headshot.src = customers[counter].picture.thumbnail;
        counter++
    }
})

    counter = 0;

    for ()

