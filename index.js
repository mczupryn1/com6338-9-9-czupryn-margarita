// Convert a var declaration to const or let where appropriate.
const container = document.getElementById("weather")
const h2 = document.createElement("h2")
const form = document.querySelector("form")
const URL = "https://api.openweathermap.org/data/2.5/weather"
let userInput
let queryString 
let fullURL = URL + queryString

// Convert a promise-based function (a function call with .then) to instead use async and await.
form.onsubmit = async function(e) {
    e.preventDefault()
    container.innerHTML = ''
   userInput = this.search.value.trim() 
   if (!userInput) return
   try{
    form.search.value = ''
    queryString = "?units=imperial&appid=1ed8ca52fcabda530685294550cfbdd9&q=" + userInput
    fullURL = URL + queryString
    const res = await fetch(fullURL)
    if (res.status !== 200) throw new Error('Location not Found')
    const mapData = await res.json()
// Convert a function declaration into a arrow function.
.then (data => {
    // Convert some object-related code to use ES6 destructuring.
   const {name} = data
   const city = name
   const country = data.sys.country
    // Convert string concatenation to instead use template literals and string interpolation.
    h2.textContent = `${city}, ${country}`
    container.appendChild(h2)

    //Add a line break between elements
    var br = document.createElement('br')
    // show map
    var map = document.createElement('a')
    long = data.coord.lon
    lat = data.coord.lat
    map.setAttribute('href', 'https://www.google.com/maps/search/?api=1&query=' + lat + ',' + long)
    map.textContent = 'Click to view map'
    container.appendChild(map)
    // weather
    var description = document.createElement('p')
    description.style.textTransform = 'capitalize'
    description.textContent = data.weather[0].description
    container.appendChild(description)
    // icon
    var img = document.createElement('img')
    img.setAttribute('src', 'https://openweathermap.org/img/wn/' + data.weather[0].icon + '@2x.png')
    container.appendChild(img)
    // current temp
    var currentTemp = document.createElement('p')
    currentTemp.textContent = 'Current: ' + data.main.temp + ' °F'
    container.appendChild(currentTemp)
    // feels like temp
    var feelsLike = document.createElement('p')
    feelsLike.textContent = 'Feels like: ' + data.main.feels_like + ' °F'
    container.appendChild(feelsLike)
    // last calc
    var date = new Date(data.dt * 1000)
    var timeString = date.toLocaleTimeString('en-US', {
        hour: 'numeric',
        minute: '2-digit'
    })
    // last updated
    var lastUpdated = document.createElement('p')
    lastUpdated.textContent = 'Last Updated: ' + timeString
    container.appendChild(lastUpdated)
})
} catch (err) {
    var errMessage = document.createElement('h2')
    errMessage.textContent = 'Location not Found'
        container.appendChild(errMessage)
    }

}