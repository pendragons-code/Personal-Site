const { quotes } = require("../../../configuration/quotes.json")
const { db } = require("../../loaders/dataBase.js")
const env = require("dotenv").config()
let fontAwesome = process.env.font
let greet = ["ᓚᘏᗢ", "/ᐠ. ｡.ᐟ\\ ᵐᵉᵒʷˎˊ˗", "Hello World!", "Pendragon's code!", "/ᐠ - ˕ -マ Ⳋ", "/\\___/\\<br>_____(=0 - 0=)_____<br>U  U", "ฅ^._.^ฅ", " ∧,,,,,∧<br>(  ̳• · • ̳)<br>/    づ♡", ">^•-•^<", "/ᐠ •ヮ• マ Ⳋ", "^•ﻌ•^ฅ♡", "/ᐠ｡ꞈ｡マ", "ᓚᘏᗢ ♡ ᗢᘏᓗ", "₍^ >ヮ<^₎", "/ᐠ_ ꞈ _ᐟ\\", "/) /)<br>( . .)<br></>( ><)"]
module.exports = {
	name: "/",
	async execute(req, res) {
		let getWeather = await db.get("weather")
		let weather = `
		<br><p>${getWeather[0].summary}</p>
			\n<ul>
			\n<li>${getWeather[2]}</li>
			\n<li>Average temperature is ${getWeather[0].temperature}°C.</li>
			\n<li>Wind chill is ${getWeather[0].wind_chill}°C.</li>
			\n<li>Dew point is ${getWeather[0].dew_point}°C.</li>
			\n<li>Feels like ${getWeather[0].feels_like}°C.</li>
			\n<li>Wind is blowing towards <b>${getWeather[0].wind.dir}</b>.</li>
			\n<li>Wind speed is about ${getWeather[0].wind.speed} km/h.</li>
			\n</ul>`
		const getRandomQuote = quotes[Math.floor(Math.random() * quotes.length)]
		const getRandomGreet = greet[Math.floor(Math.random() * greet.length)]
		return res.render("landingPage.ejs", { quote: getRandomQuote, randomGreet: getRandomGreet.replace(/ /g, "&nbsp;"), weather: weather, fontAwesome: fontAwesome })
	}
}
