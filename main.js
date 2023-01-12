const URL = "http://api.thecatapi.com/v1/images/search"

fetch(URL)
    // .then(res => res.json())
    // .then(data => {
    //     console.log(data)
    //     const img = document.querySelector('img')
    //     img.src = data[0].url          
    // })
async function getKitty(url){
    const res = await fetch(url)
    const data = await res.json()
    const img = document.querySelector('img')
    img.src = data[0].url 
}

getKitty(URL)

let refresh = document.getElementById('refresh')
refresh.addEventListener('mouseover', () => location.reload())