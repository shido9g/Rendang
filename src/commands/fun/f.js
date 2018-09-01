const Discord = require("discord.js");
const path = require("path");
//const SQL = require('sqlite3').verbose();

exports.run = async (client, message, args, color) => {
    //const database = new SQL.Database(path.join(__dirname, '..', '..', 'Databases', 'f-total.db'));

}

exports.conf = {
  aliases: [],
  cooldowns: '5'
}

exports.help = {
  name: "f",
  description: "press f to pay respect",
  usage: "f"
}
