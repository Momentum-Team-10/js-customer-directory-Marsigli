//Headshot to be poplulated from customer.js to <img>
//CustomerName to be populated from customer.js to <h3>
//email to be populated from customer.js to <p>
//location to be populated from customer.js to <p>
//DOB to be populated from customer.js to <p>



const container = document.getElementById("container")
console.log(container)

// const customer = customers[0]
// console.log(customer)

// const card = document.createElement('div')

// card.id =  customer.email

// const customerName = document.createElement('h3')
// customerName.innerText = customer.name.first + ' ' + customer.name.last

// container.appendChild(card)

// card.appendChild(customerName)

// const customerEmail = document.createElement('p')
// customerEmail.innerText = customer.email

// card.appendChild(customerEmail)

for (customer of customers) {
    const card = document.createElement('div')
    card.id =  customer.email
    const customerImg = document.createElement('img')
    customerImg.src=customer.picture.medium
    const customerName = document.createElement('h3')
    customerName.innerText = customer.name.first + ' ' + customer.name.last
    container.appendChild(card)
    card.appendChild(customerImg)
    card.appendChild(customerName)
    const customerEmail = document.createElement('p')
    customerEmail.innerText = customer.email
    card.appendChild(customerEmail)
    const customerAddress = document.createElement('p')
    customerAddress.innerText = customer.location.street.number + ' ' + customer.location.street.name + ' ' + customer.location.city + ' ' + customer.location.state + ' ' + customer.location.postcode
    card.appendChild(customerAddress)
    const customerDob = document.createElement('p')
    // customerDob.innerText = moment(customer.dob.date).format(MMM, DD, YYYY)
    card.appendChild(customerDob)
}




