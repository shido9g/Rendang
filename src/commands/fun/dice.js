const { RichEmbed } = require('discord.js');

exports.run = (client, message, args, color) => {
  const embed = new RichEmbed() 
  .setColor(color)
  .setThumbnail('https://gilkalai.files.wordpress.com/2017/09/dice.png?w=640')
  .setAuthor(message.author.username, message.author.avatarURL)
  .setTitle('ROLED DICE')
  .setDescription(`
${Math.floor(Math.random()*8)}
`);
  return message.channel.send(embed);
}

exports.conf = {
  aliases: ['role-dice'],
  cooldown: '5'
}

exports.help = {
  name: "dice",
  description: 'Try to roled dice and get your luck.',
  usage: 'dice'
}
