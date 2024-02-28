var inputvalue = document.querySelector('#cityinput');
var btn = document.querySelector('#add');
var city = document.querySelector('#cityoutput');
var description = document.querySelector('#description'); // Changed variable name to avoid conflict
var temp = document.querySelector('#temp');
var wind = document.querySelector('#wind');
var apik = "01e16839ed0a7f3357671561a3e838f0";

function convertion(val) {
    return (val - 273).toFixed(3);
}

btn.addEventListener('click', function() {
    fetch('https://api.openweathermap.org/data/2.5/weather?q=' + inputvalue.value + '&appid=' + apik)
    .then(res => res.json())
    .then(data => {
        var nameval = data['name'];
        var descrip = data['weather'][0]['description']; // Fixed accessing description
        var tempature = data['main']['temp'];
        var wndspeed = data['wind']['speed'];

        city.innerHTML = `Weather of <span>${nameval}</span>`; // Corrected span tag closing
        temp.innerHTML = `Temperature: <span>${convertion(tempature)} C</span>`;
        description.innerHTML = `Sky Conditions: <span>${descrip}</span>`;
        wind.innerHTML = `Wind Speed: <span>${wndspeed} km/h</span>`;
    })
    .catch(err => alert('You entered wrong city name'));
});
