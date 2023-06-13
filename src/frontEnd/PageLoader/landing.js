const quotes = ["\"I like 8 bit art!\"<br>- Pendragon's code", "\"Whoso pulleth out this sword of this stone and anvil, is rightwise king born of all England.\"<br>- Sir Thomas Malory", "\"The sweetness of love is short-lived, but the pain endures.\"<br>- Sir Thomas Malory", "\"We shall now seek that which we shall not find.\"<br>- Sir Thomas Malory", "\"Nay, I may not so, for I have promised to do the battle to the uttermost by the faith of my body, while me lasteth the life, and therefore I had liefer to die with honour than to live with shame; and if it were possible for me to die an hundred times, I had liefer to die so oft than yield me to thee; for though I lack weapon, I shall lack no worship, and if thou slay me weaponless that shall be thy shame.\"<br>- King Arthur to Sir Accolon, Sir Thomas Malory"]
const greet = ["ᓚᘏᗢ", "/ᐠ. ｡.ᐟ\\ ᵐᵉᵒʷˎˊ˗", "Hello World!", "Pendragon's code!", "/ᐠ - ˕ -マ Ⳋ", "/\\___/\\<br>_____(=0 - 0=)_____<br>U  U", "ฅ^._.^ฅ", " ∧,,,,,∧<br>(  ̳• · • ̳)<br>/    づ♡", ">^•-•^<", "/ᐠ •ヮ• マ Ⳋ", "^•ﻌ•^ฅ♡", "/ᐠ｡ꞈ｡マ", "ᓚᘏᗢ ♡ ᗢᘏᓗ", "₍^ >ヮ<^₎", "/ᐠ_ ꞈ _ᐟ\\", "/) /)<br>( . .)<br></>( ><)"]
const landingPages = ["landingPage.ejs", "tokyonightlanding.ejs"]
module.exports = {
	name: "/",
	async execute(req, res) {
		const getRandomQuote = quotes[Math.floor(Math.random() * quotes.length)]
		const getRandomGreet = greet[Math.floor(Math.random() * greet.length)]
		const randomPage = landingPages[Math.floor(Math.random() * landingPages.length)]
		let getWeather = await db.get("weather")
		let weatherFinalFromGet = getWeather[2]
		if(randomPage === "tokyonightlanding.ejs") weatherFinalFromGet = getWeather[2].replace("f5bc92", "bfc9f3")
		let weather = `
		<br><p>${getWeather[0].summary}</p>
			\n<ul>
			\n<li>${weatherFinalFromGet}</li>
			\n<li>Average temperature is ${getWeather[0].temperature}°C.</li>
			\n<li>Wind chill is ${getWeather[0].wind_chill}°C.</li>
			\n<li>Dew point is ${getWeather[0].dew_point}°C.</li>
			\n<li>Feels like ${getWeather[0].feels_like}°C.</li>
			\n<li>Wind is blowing towards <b>${getWeather[0].wind.dir}</b>.</li>
			\n<li>Wind speed is about ${getWeather[0].wind.speed} km/h.</li>
			\n</ul>`
		return res.render(randomPage, { weather: weather, quote: getRandomQuote, greeting: getRandomGreet.replace(/ /g, "&nbsp;")  })
		// turns out the error is for the icons only affected partly-sunny
	}
}
