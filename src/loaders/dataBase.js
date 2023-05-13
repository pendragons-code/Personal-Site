const { QuickDB }  = require("quick.db")
global.db = new QuickDB({ filePath: "DATABASE/DATABASE.sqlite" })
