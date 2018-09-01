const Discord = require("discord.js");
const path = require("path");
const SQL = require('sqlite3').verbose();

exports.run = async (client, message, args, color) => {
    const database = new SQL.Database(path.join(__dirname, '..', '..', 'Databases', 'f-total.db'));

}

exports.conf = {
  aliases: ["ev", "e"],
  cooldowns: '0'
}

exports.help = {
  name: "eval",
  description: "evaluated",
  usage: "eval {some super javascript code}"
}
