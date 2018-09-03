const { RichEmbed } = require('discord.js');

exports.run = async (bot, message, args) => {
  if (!message.member.hasPermission("MANAGE_MESSAGES")){ 
    let embed = new RichEmbed()
      .setColor("RANDOM")
      .setTitle("Sorry You No Have Permissions To Ban Members");
return message.channel.send(embed);
  }
  
   let toBan = message.guild.member(message.mentions.users.first()) || message.guild.members.get(args[0]);
   if(!toBan) return message.channel.sendMessage("Can't find user! Please Mention User !");
    
  toBan.ban(7)
  .then(() => console.log(`Banned ${toBan.displayName}`))
  .catch(console.error); 
  
  let embed = new RichEmbed()
    .setColor("RANDOM")
    .setTitle(`${toBan.displayName} Sudah Diban Dari Server !`);
  message.channel.send(embed);
  
}
 
exports.conf = {
  aliases: ['ban'],
  cooldown: '5'
}

exports.help = {
  name: "ban",
  description: 'Ban Seseorang Dari Servermu [ADMIN ONLY]',
  usage: 'ban [@mention someone]'
}
