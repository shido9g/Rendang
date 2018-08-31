const Discord = require("discord.js");

exports.run = async (bot, message, args) => {
  var botmessage = args.join(" ");
  if (!botmessage) return {
    var embed = new Discord.RichEmbed()
      .setColor("RANDOM")
      .setDescription(`<@${message.author.id}> Saya Harus Ngomong Apa? Masukkan Kata Kata Dengan Benar :V`)
      .setTimestamp()

    message.channel.send({
      embed
    });
  }
  message.delete();
  message.channel.send(botmessage);

}
exports.conf = {
  aliases: ['s']
}

exports.help = {
  name: 'say',
  description: 'Makes Bot Say Something',
  usage: 'say [message]'
};
