require("dotenv").config({ path: `.env.${process.env.NODE_ENV}` })
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

	await axios.request(options)
	.catch(async (error) => {
		await db.set("weather", [ currentWeather[0], currentWeather[1] ])
		console.error(error)
	})
	.then(async (result) => {
		let style = ""
		let weatherResult = result.data.daily.data[0].weather
		if(result.detail) return await db.set("weather", [ currentWeather[0], currentWeather[1] ])
		if(weatherResult.includes("cloudy") || result.data.daily.data[0].weather === "overcast" || weatherResult.includes("sunny")) style = `<i class="fa-solid fa-cloud fa-beat-fade" style="color: #f5bc92;"> </i> ${result.data.daily.data[0].weather.replaceAll("_", " ").toUpperCase()} (weather code)`
		if(weatherResult.includes("rain") || weatherResult.includes("shower")) style = `<i class="fa-solid fa-umbrella fa-beat-fade" style="color:#f5bc92;"> </i> ${result.data.daily.data[0].weather.replaceAll("_", " ").toUpperCase()} (weather code)`
		if(weatherResult.includes("storm")) style = `<i class="fa-solid fa-cloud-bolt fa-beat-fade" style="color: #f5bc92;"> </i> ${result.data.daily.data[0].weather.replaceAll("_", " ").toUpperCase()} (weather code)`
		let newWeatherInfo = [result.data.daily.data[0], newWeatherDate, style]
		await db.set("weather", newWeatherInfo)
	})
}
getWeather()
setInterval(getWeather, 3.6e+6)
