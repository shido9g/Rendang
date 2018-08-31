const { RichEmbed } = require('discord.js');

exports.run = (client, message, args, color) => {
  
  let roll = Math.floor(Math.random() * args.xsides) + 1;
  const embed = new RichEmbed() 
  .setColor(color)
  .setThumbnail('https://gilkalai.files.wordpress.com/2017/09/dice.png?w=640')
  .setAuthor(message.author.username, message.author.avatarURL)
  .setTitle("Rolling a " + args.xsides + " sided dice.")
  .setDescription("You roled a" + roll)
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
