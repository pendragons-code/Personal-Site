const { quotes } = require("../../../configuration/quotes.json")
module.exports = {
	name: "/",
	async execute(req, res) {
		const getRandomQuote = quotes[Math.floor(Math.random() * quotes.length)]
		return res.render("landingPage.ejs", { quote: getRandomQuote })
	}
}
