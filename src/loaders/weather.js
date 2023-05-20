const env = require("dotenv").config()
const axios = require("axios")
async function getWeather() {
	let newWeatherDateOBJ = new Date()
	let newWeatherDate = `${newWeatherDateOBJ.getDate()}-${newWeatherDateOBJ.getMonth()+1}-${newWeatherDateOBJ.getFullYear()}`
	let currentWeather = await db.get("weather")
	if(currentWeather === null) currentWeather = ["Not available!", "Not available!"]
	if(currentWeather[1] === newWeatherDate) return
	const options = {
		method: "GET",
		url: "https://ai-weather-by-meteosource.p.rapidapi.com/daily",
		params: { lat: '1.352230N', lon: '103.711342E', language: 'en', units: 'metric' },
		headers: {
			"X-RapidAPI-Key": process.env.weatherAPIKey,
			"X-RapidAPI-Host": "ai-weather-by-meteosource.p.rapidapi.com"
		}
	}

	axios.request(options)
	.catch(async () => {
		await db.set("weather", [ currentWeather[0], currentWeather[1] ])
	})
	.then(async (result) => {
		let style = ""
		if(result.detail) return await db.set("weather", [ currentWeather[0], currentWeather[1] ])
		if(result.data.daily.data[0].weather.includes("cloudy") || result.data.daily.data[0].weather === "overcast") style = `<i class="fa-solid fa-cloud fa-beat-fade" style="color: #f5bc92;"> </i> ${result.data.daily.data[0].weather.replaceAll("_", " ").toUpperCase()} (weather code)`
		if(result.data.daily.data[0].weather.includes("rain") || result.data.daily.data[0].weather.includes("shower")) style = `<i class="fa-solid fa-umbrella fa-beat-fade" style="color:#f5bc92;"> </i> ${result.data.daily.data[0].weather.replaceAll("_", " ").toUpperCase()} (weather code)`
		if(result.data.daily.data[0].weather.includes("storm")) style = `<i class="fa-solid fa-cloud-bolt fa-beat-fade" style="color: #f5bc92;"> </i> ${result.data.daily.data[0].weather.replaceAll("_", " ").toUpperCase()} (weather code)`
		if(result.data.daily.data[0].weather.includes("sunny")) style = `<i class="fa-solid fa-cloud fa-beat-fade" style="color: #f5bc92;"> </i> ${result.data.daily.data[0].weather.replaceAll("_", " ").toUpperCase()} (weather code)`
	let newWeatherInfo = [result.data.daily.data[0], newWeatherDate, style]
		await db.set("weather", newWeatherInfo)
	})
}
getWeather()
setInterval(getWeather, 3.6e+6)
