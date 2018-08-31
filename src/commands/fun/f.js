/* const { RichEmbed } = require('discord.js');
const SQL = require("sqlite3").verbose();
var database = new SQL.Database('../../database/sqlite/f-total.db');

exports.run = async (client, message, args, color) => {
    var db = await database

    db.run("CREATE TABLE IF NOT EXISTS ftotal (total INTEGER)");
    db.get(`SELECT * FROM ftotal`, async function (err, rows) {
        if (err) {
            if (err.message === "SQLITE_ERROR: no such table: ftotal") return undefined;
            console.error(err.message)
        }
        try {
            var fTotal = rows.total + 1;
            db.run(`UPDATE ftotal SET total = '${fTotal}'`)
        } catch (e) {
            if (e.message === "Cannot read property 'total' of undefined") {
                db.run("INSERT INTO ftotal (total) VALUES (?)", [0]);
                fTotal = 0
            } else {
                console.error(e)
            }
        }
        var embed = new RichEmbed()
            .setDescription(`${message.author.tag} Has paid their respects!`)
            .setFooter(fTotal + " Respects")
            .setColor(color)
        message.channel.send(embed)
    });

}

exports.conf = {
  aliases: [],
  cooldown: '5'
}

exports.help = {
  name: "f",
  description: 'Press f to pay respects.',
  usage: 'f'
}
 */