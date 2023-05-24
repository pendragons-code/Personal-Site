// I will actually add q and a soon!
const quotes = ["\"I like 8 bit art!\"<br>- Pendragon's code", "\"Whoso pulleth out this sword of this stone and anvil, is rightwise king born of all England.\"<br>- Sir Thomas Malory", "\"The sweetness of love is short-lived, but the pain endures.\"<br>- Sir Thomas Malory", "\"We shall now seek that which we shall not find.\"<br>- Sir Thomas Malory", "\"Nay, I may not so, for I have promised to do the battle to the uttermost by the faith of my body, while me lasteth the life, and therefore I had liefer to die with honour than to live with shame; and if it were possible for me to die an hundred times, I had liefer to die so oft than yield me to thee; for though I lack weapon, I shall lack no worship, and if thou slay me weaponless that shall be thy shame.\"<br>- King Arthur to Sir Accolon, Sir Thomas Malory"]
module.exports = {
	name: "foodwaste",
	async execute(req, res) {
		const getRandomQuote = quotes[Math.floor(Math.random() * quotes.length)]
		return res.render("qAndA.ejs", { quote: getRandomQuote })
	}
}
