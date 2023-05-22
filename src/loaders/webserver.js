const express = require("express")
const helmet = require("helmet")
const env = require("dotenv").config()
const { join } = require("path")
const app = express()
const port = process.env.port || 3000
const frontEnd = require("./frontEnd.js")
require("./dataBase.js")
require("./weather.js")


if(!port) console.log("Port is empty and will be assumed to be 3000!")

app.use(function(req, res, next) {
	res.setHeader("Content-Security-Policy", "frame-ancestors 'self';")
	next()
})

app.use("/", frontEnd)
app.set("view engine", "ejs")
app.set("views", join(__dirname, "../frontEnd/views"))
app.use(express.static(join(__dirname, "../frontEnd/public")))
app.use(function(req, res) {
	res.render("404.ejs")
})

app.use(helmet({
	contentSecurityPolicy: false,
	nosniff: true,
	xssFilter: true,
	hsts: { maxAge: 31536000, includesSubDomiains: true }
}))

app.listen((port), async () => {
	console.log(`Hanging onto dear life at ${process.pid}\nCurrently listening at http://localhost:${port}!`)
})
