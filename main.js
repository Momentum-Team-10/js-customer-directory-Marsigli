
const container = document.getElementById("container")
console.log(container)

for (customer of customers) {
    const card = document.createElement('div')
    card.id = customer.email
    card.className = "card"
    container.appendChild(card)

    const customerImg = document.createElement('img')
    customerImg.src=customer.picture.medium
    customerImg.className = "img"
    card.appendChild(customerImg)

    const customerName = document.createElement('h3')
    customerName.innerText = customer.name.first + ' ' + customer.name.last
    customerName.className = "customerName"
    card.appendChild(customerName)
    // customerName.toUpperCase()
    
    
    const customerEmail = document.createElement('p')
    customerEmail.innerText = customer.email
    customerEmail.className = "email"
    card.appendChild(customerEmail)

    const customerAddress = document.createElement('p')
    customerAddress.innerText = customer.location.street.number + ' ' + customer.location.street.name + ' ' + customer.location.city + ' ' + customer.location.state + ' ' + customer.location.postcode
    customerAddress.className = "address"
    card.appendChild(customerAddress)

    const customerDob = document.createElement('p')
    customerDob.innerText = "DOB: " + moment(customer.dob.date).format("MMM DD, YYYY")
    customerDob.className = "DOB"
    card.appendChild(customerDob)

    const customerSince = document.createElement('p')
    customerSince.innerText = "Customer Since: " + moment(customer.registered.date).format("MMM DD, YYYY")
    customerSince.className = "customer-since"
    card.appendChild(customerSince)
}




