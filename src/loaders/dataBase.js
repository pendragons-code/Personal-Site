const { QuickDB }  = require("quick.db")
const db = new QuickDB({ filePath: "DATABASE/DATABASE.sqlite" })
module.exports = { db }
