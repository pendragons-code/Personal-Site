const { quotes } = require("../../../configuration/quotes.json")
let greet = ["ᓚᘏᗢ", "/ᐠ. ｡.ᐟ\\ ᵐᵉᵒʷˎˊ˗", "Hello World!", "Pendragon's code!", "/ᐠ - ˕ -マ Ⳋ", "/\\___/\\<br>_____(=0 - 0=)_____<br>U  U"]
module.exports = {
	name: "/",
	async execute(req, res) {
		const getRandomQuote = quotes[Math.floor(Math.random() * quotes.length)]
		const getRandomGreet = greet[Math.floor(Math.random() * greet.length)]
		return res.render("landingPage.ejs", { quote: getRandomQuote, randomGreet: getRandomGreet.replace(/ /g, "&nbsp;") })
	}
}
