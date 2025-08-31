const apikey = "2ce317859a829ac0e9a1969901f9fb3b";
const apiurl = "https://api.openweathermap.org/data/2.5/weather?units=metric&q=";
const searchbox = document.querySelector('.search input');
const searchbtn = document.querySelector('.search button');
const background_img = document.body;


const weatherIcon = document.querySelector('.weather-icon');

async function checkweather(city) {
    const response = await fetch(apiurl +city+ `&appid=${apikey}`);
    var data = await response.json();

    console.log(data);
    document.querySelector('.city').innerHTML = data.name;//name indiate the data which is recived through api in the form of object in which name is mentioned.
    document.querySelector('.temp').innerHTML = Math.round(data.main.temp)+"°C";
    document.querySelector('.humidity').innerHTML = data.main.humidity+"%";
    document.querySelector('.wind').innerHTML = data.wind.speed+" km/h";



    // update img
   if (data.weather[0].main == "Clouds") {
    weatherIcon.src = "clouds.png";
    background_img.style.backgroundImage = "url('background_cloud.png')";
} else if (data.weather[0].main == "Clear") {
    weatherIcon.src = "clear.png";
    background_img.style.backgroundImage = "url('background_clear.png')";
} else if (data.weather[0].main == "Rain") {
    weatherIcon.src = "rain.png";
    background_img.style.backgroundImage = "url('background_rain.png')";
} else if (data.weather[0].main == "Drizzle") {
    weatherIcon.src = "drizzle.png";
    background_img.style.backgroundImage = "url('background_drizzle.png')";
} else if (data.weather[0].main == "Mist") {
    weatherIcon.src = "mist.png";
    background_img.style.backgroundImage = "url('background_mist.png')";
}

    //background img
}
searchbtn.addEventListener('click', ()=>{
    checkweather(searchbox.value);// this will return city name input fild which is passed in checkweather function.
})


//on press enter it will search weather
searchbox.addEventListener('keydown', (event) => {
    if (event.key === "Enter") {
        checkweather(searchbox.value);
    }
});
