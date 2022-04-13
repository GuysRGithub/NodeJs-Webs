
const form = document.querySelector('.form')
console.log('Welcome')

const URL_SERVER = "http://localhost:3000/guys"

form.addEventListener("submit", (event) => {
    event.preventDefault();
    const formData = new FormData(form)
    const name = formData.get('name')
    const content = formData.get('content')

    var data = {
        name,
        content
    }
    
    fetch(URL_SERVER, {
        method: 'POST',
        body: JSON.stringify(data),
        headers: {
            'content-type': 'application/json'
        }
    })
    .then(res => res.json())
    .then(result => 
        {
            console.log(result)
        })

    fetch(URL_SERVER)
    .then(response => response.json())
    .then(data => console.log(data))
})