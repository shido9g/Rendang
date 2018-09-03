const Discord = require("discord.js");

exports.run = async (bot, message, args) => {

    let embed = new Discord.RichEmbed()
        .setTitle("Dab")
        .setImage('https://giphy.com/gifs/dab-AHN0PfASlNy3S')
     
      message.channel.send(embed);
      
}

exports.conf = {
    aliases: [],
    cooldown: "5"
}

exports.help = {
    name: "dab",
    description: "dab",
    usage: "dab"
}
