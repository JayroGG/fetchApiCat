console.log("Hello World")

const URL = "http://api.thecatapi.com/v1/images/search"

fetch(URL)
    .then(res => res.json())
    .then(data => {
        const img = document.querySelector('img')
        img.src = data[0].url          
    })

let refresh = document.getElementById('refresh')
refresh.addEventListener('mouseover', () => location.reload())