const Discord = require("discord.js");

exports.run = async (bot, message, args) => {
  var botmessage = args.join(" ");
  if (!botmessage) {
    var embed = new Discord.RichEmbed()
      .setColor("RANDOM")
      .setDescription(`<@${message.author.id}> Saya Harus Ngomong Apa?`)
      .setTimestamp()

    message.channel.send({
      embed
    });
  }
  message.delete();
  message.channel.send(botmessage);

}

exports.help = {
  name: 'say',
  aliases: ['s'],
  description: 'Makes Bot Say Something',
  usage: '(p)say [message]'
};