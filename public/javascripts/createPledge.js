const apiUrl = 'http://localhost:3000';
// const apiUrl = herokuapp.com to deploy OR change to localhost/3000 to use locally
const eventsUrl = apiUrl + '/pledges';


document.addEventListener("DOMContentLoaded", (event) => {
  console.log("DOM fully loaded and parsed")

  fetch('/pledges', { method: 'GET'})

  .then((response) => {
    return response.json()
  })

  .then((myUsers) => {
    console.log(myUsers)
    // represents success
    // DOM manipulation

    let ul = document.getElementById('userlist')
    for( user of myUsers ) {
      let li = document.createElement('li')
      li.innerText = user.name
      ul.appendChild(li)
    }

  })
})
