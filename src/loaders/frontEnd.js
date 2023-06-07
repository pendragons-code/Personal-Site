const { readdirSync } = require("fs")
const express = require("express")
const routeFrontEnd = express.Router()
const { rateLimit } = require("express-rate-limit")
const { frontEndRateLimit } = require("../../configuration/rateLimit.json")

const limiter = rateLimit({
	windowMs: frontEndRateLimit.windowMinutes * 60000,
	max: frontEndRateLimit.maxWindowRequest,
	standardHeaders: frontEndRateLimit.standardHeaders,
	legacyHeaders: frontEndRateLimit.legacyHeaders,
	message: frontEndRateLimit.message
})

routeFrontEnd.use(limiter)

const loadFrontEndFile = readdirSync("./src/frontEnd/PageLoader").filter(files => files.endsWith(".js"))
for(file of loadFrontEndFile) {
	const { execute, name } = require(`../frontEnd/PageLoader/${file}`)
	routeFrontEnd.get(`/${name}`, async (req, res) => {
		execute(req, res)
	})
}

module.exports = routeFrontEnd
