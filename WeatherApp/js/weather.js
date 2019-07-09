let mylocation = document.getElementById('location-search');
let getweather = document.getElementById('getweather');
let weatherinfo = document.getElementById('weatherinfo');
let weatherlogo = document.getElementById('weatherlogo');
let domlocation = document.getElementById('location');
let domweatherdes = document.getElementById('weatherdes');
let domweather = document.getElementById('weather');
let domtemp = document.getElementById('temp');
let wrapper = document.getElementById('wrapper');
const apiKey = "82240b8d3f4d2a46b8412462b93d82b3";
getweather.addEventListener('click', function() {
    if (mylocation.value === "") {
        document.getElementById('header').innerHTML = "PLease enter valid Name. Eg  Kathmandu,London";
        return;
    } else {
        fetch(`http://api.openweathermap.org/data/2.5/weather?q=${mylocation.value}&appid=${apiKey}`)
            .then(response => {
                return response.json();
            })
            .then(result => {
                loadWrapper(result);
                getweatherData(result);
                changeBackground(result);
                // console.log(result, result.name, result.weather[0].description, result.weather[0].main, result.main.temp);
                // getimage(result.weather[0].icon);
            })
            .catch(err => {
                document.getElementById('header').innerHTML = "PLease enter valid Name. Eg Korea, Dhulikhel , Kathmandu,London";
            })
    }







});

function loadWrapper(gotIt) {

    if (gotIt) {

        weatherinfo.style.height = "60vh";
        weatherinfo.style.width = "70vh";

        weatherinfo.style.display = "flex";
        weatherinfo.style.transition = "1s all ease";
    }

}

function getweatherData(weatherData) {
    weatherlogo.src = "http://openweathermap.org/img/w/" + weatherData.weather[0].icon + ".png";
    domlocation.innerHTML = weatherData.name;
    domtemp.innerHTML = weatherData.main.temp + " F";
    domweather.innerHTML = weatherData.weather[0].main;
    domweatherdes.innerHTML = weatherData.weather[0].description;
    // console.log('http://openweathermap.org/img/w/' + weatherlogo + '.png');
}

function changeBackground(serverresponse) {
    console.log(serverresponse.weather[0].main);
    switch (serverresponse.weather[0].main) {
        case 'Clear':
            wrapper.style.backgroundImage = "url('./images/sunny.jpg')";
            wrapper.style.transition = "0.5s all ease";
            break;
        case 'Clouds':
            wrapper.style.backgroundImage = "url('./images/clouds.jpg')";
            wrapper.style.transition = "0.5s all ease";
            break;

        case 'Rain':
            wrapper.style.backgroundImage = "url('./images/rain.jpg')";
            wrapper.style.transition = "0.5s all ease";
            break;

        case 'Drizzle':
            wrapper.style.backgroundImage = "url('./images/drizzle.jpg')";
            wrapper.style.transition = "0.5s all ease";
            break;
        case 'Mist':
            wrapper.style.backgroundImage = "url('./images/mist.jpg')";
            wrapper.style.transition = "0.5s all ease";
            break;
        case 'Thunderstorm':
            wrapper.style.backgroundImage = "url('./images/thunderstorm.jpg')";
            wrapper.style.transition = "0.5s all ease";
            break;
        case 'Snow':
            wrapper.style.backgroundImage = "url('./images/snow.jpg')";
            wrapper.style.transition = "0.5s all ease";
            break;
        default:
            wrapper.style.backgroundImage = "none";
            wrapper.style.transition = "0.5s all ease";
            break;




    }
}