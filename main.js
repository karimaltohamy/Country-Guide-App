let inputApp = document.querySelector(".input-app");
let btnApp = document.querySelector(".btn");
let content = document.querySelector(".content")

btnApp.addEventListener("click", (e) => {
    e.preventDefault()

    let value = inputApp.value
    let url = `https://restcountries.com/v3.1/name/${value}?fullText=true`

    fetch(url)
    .then((result) => result.json())
    .then(data => {
        console.log(data)
        console.log(data[0].flags.svg)
        console.log(data[0].name.common)
        console.log(data[0].capital[0])
        console.log(data[0].continents[0])
        console.log(data[0].population)
        console.log(data[0].currencies[Object.keys(data[0].currencies)].name)
        console.log(Object.keys(data[0].currencies)[0]);
        console.log(Object.values(data[0].languages).toString().split(",").join(", "))

        content.innerHTML = `
        <img src="${data[0].flags.svg}" class="flag">
        <h1>${data[0].name.common}</h1>
        <div class="info">
            <h5>Capital: <span>${data[0].capital[0]}</span></h5>
        </div>
        <div class="info">
            <h5>Continent: <span>${data[0].continents[0]}</span></h5>
        </div>
        <div class="info">
            <h5>population: <span>${data[0].population}</span></h5>
        </div>
        <div class="info">
            <h5>Currency: <span>${data[0].currencies[Object.keys(data[0].currencies)].name} 
            - ${Object.keys(data[0].currencies)[0]}</span></h5>
        </div>
    
        <div class="info">
            <h5>Languages: <span>${Object.values(data[0].languages).toString().split(",").join(", ")}</span></h5>
        </div>
        `
    }).catch(() => {
        if (value.length == 0) {
            content.innerHTML = `<h4>The input fiald cannot be empty</h4>`
        }else {
            content.innerHTML = `<h4>Please enter a valid country name.</h4>`
        }
    })

    inputApp.value = ""
})