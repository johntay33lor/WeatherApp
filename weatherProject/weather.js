const apiKey = "5436ffa063824720ac4de298ba9f0527";
const apiUrl = "https://api.openweathermap.org/data/2.5/weather?&units=imperial&zip=";
const search = document.querySelector(".search input");
const searchBtn = document.querySelector(".search button");
const icon = document.querySelector(".icon");
async function getWeather(zip){
	const weather = await fetch(apiUrl + `${zip},US` + `&appid=${apiKey}`);
	
	if(weather.status == 404){
		document.querySelector(".error").style.display = "block";
		document.querySelector(".weather").style.display = "none";
	} else {

	}
	let data = await weather.json();

	console.log(data);

	document.querySelector(".city").innerHTML = data.name;
	document.querySelector(".temperatureHigh").innerHTML = Math.round(data.main.temp_max) + "°F";
	document.querySelector(".temperatureCurrent").innerHTML = Math.round(data.main.temp) + "°F";
	document.querySelector(".temperatureLow").innerHTML = Math.round(data.main.temp_min) + "°F";
	document.querySelector(".windSpeed").innerHTML = Math.round(data.wind.speed) + " mph";
	document.querySelector(".humidity").innerHTML = data.main.humidity + "%";
	document.querySelector(".feelsLike").innerHTML = Math.round(data.main.feels_like) + "°F";
	document.querySelector(".currentDay").innerHTML = new Date().toLocaleDateString('en-US', {weekday: 'long'});
    document.querySelector(".currentYear").innerHTML = new Date().toLocaleDateString('en-US', {year: 'numeric', month: 'long', day: 'numeric'});
	
	if (data.weather[0].main == "Clouds"){
		icon.src = "cloudy-day-1.svg";
	} else if (data.weather[0].main == "Clear"){
		icon.src = "day.svg";
	}
	else if (data.weather[0].main == "Rain"){
		icon.src = "rainy-7.svg";
	}
	else if (data.weather[0].main == "Snow"){
		icon.src = "snowy-1.svg";
	}
	else if (data.weather[0].main == "Drizzle"){
		icon.src = "rainy-4.svg";
	}
	
	document.querySelector(".weather").style.display = "block";
	document.querySelector(".error").style.display = "none";
}
searchBtn.addEventListener("click", ()=> {
	getWeather(search.value);
})

