const weather = document.querySelector(".js-weather");

const API_KEY = '8e446d8ebdeb7355a56005de9f481bd6';
const COORDS = 'coords';


function getWeather(lat, lon){
    fetch(
    `http://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`)
    .then(function(response){
        return response.json()
    })
    .then(function(json){
        const tmeperture = json.main.temp;
        const place = json.name;
        weather.innerText = `temp : ${tmeperture}, city : ${place}`
    });
}

function saveCoords(coordsObj){
    localStorage.setItem(COORDS,JSON.stringify(coordsObj));
}

function handleGeoSucces(position){
    const latitude = position.coords.latitude;
    const longitude = position.coords.longitude;
    const coordsObj = {
        latitude ,
        longitude
    } ;
    saveCoords(coordsObj);
    getWeather(latitude,longitude);
}

function handleGeoError(){
    console.log('Cnat access geo location');
}

function askForCoords(){
    navigator.geolocation.getCurrentPosition(handleGeoSucces,handleGeoError);
}

function loadCoords(){
    const loadedCoodrds =localStorage.getItem(COORDS);
    if(loadedCoodrds ===null){
        askForCoords();
    }else{
        const parseCoords = JSON.parse(loadedCoodrds);
      getWeather(parseCoords.latitude, parseCoords.longitude);
    }
}


function init(){
    loadCoords();
}

init();