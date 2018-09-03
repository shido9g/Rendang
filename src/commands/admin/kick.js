const { RichEmbed } = require('discord.js');

exports.run = async (client, message, args) => {
  if (!message.member.hasPermission("MANAGE_MESSAGES")){ 
    let embed = new RichEmbed()
      .setColor("RANDOM")
      .setTitle("Sorry You No Have Permissions To Ban Members");
return message.channel.send(embed);
  }
  if (!message.guild.member(client.user).hasPermission("MANAGE_NICKNAMES")) return message.channel.send(`**${message.author.tag}** Sorry, I don't have \`KICK_MEMBERS\` permissions.`).then(msg=>msg.delete(5000))
  
  let toKick = message.guild.member(message.mentions.users.first()) || message.guild.members.get(args[0]);
  if(!toKick) return message.channel.sendMessage("Can't find user! Please Mention User !");
  let reason = args.join(" ").slice(22);
  if (toKick.hasPermission("KICK_MEMBERS")) return message.channel.send("That person can't be banned").then(msg => msg.delete(3000));
  
  if (toKick.highestRole.position < message.guild.member(client.user).highestRole.position) {
   message.guild.member(toBan).kick(reason);
   try {
    if (!reason) {
      toKick.send(`**${toBan.user.tag}** You were banned from **${message.guild.name}**`)
    } else {
      toKick.send(`**${toBan.user.tag}** You were banned from **${message.guild.name}**
Reason: "${reason}"`);
    }
    let embedB = new RichEmbed()
    .setColor('RANDOM')
    .setTitle('User Kicked From Server')
    .addField('username', toKick.user.username, true)
    .addField('ID', toKick.id, true)
    message.channel.send(embedB);
  } catch (e) {
    console.log(e.message)
  }
  } else {
   message.channel.send(`Infortunately I cannot kick **${toKick.user.tag}** because the role is higher than mine.`)
  }
}
 
exports.conf = {
  aliases: ['kick'],
  cooldown: '5'
}

exports.help = {
  name: "kick",
  description: 'Kick Seseorang Dari Servermu [ADMIN ONLY]',
  usage: 'Kick [@mention someone]'
}
