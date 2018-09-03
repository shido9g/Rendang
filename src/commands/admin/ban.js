const { RichEmbed } = require('discord.js');

exports.run = async (client, message, args) => {
  if (!message.member.hasPermission("MANAGE_MESSAGES")){ 
    let embed = new RichEmbed()
      .setColor("RANDOM")
      .setTitle("Sorry You No Have Permissions To Ban Members");
return message.channel.send(embed);
  }
  
  let toBan = message.guild.member(message.mentions.users.first()) || message.guild.members.get(args[0]);
  if(!toBan) return message.channel.sendMessage("Can't find user! Please Mention User !");
  let reason = args.join(" ").slice(22);
  if (toBan.hasPermission("BAN_MEMBERS")) return message.channel.send("That person can't be banned").then(msg => msg.delete(3000));
  
  if (toBan.highestRole.position < message.guild.member(client.user).highestRole.position) {
   message.guild.member(toBan).ban(reason);
   try {
    if (!reason) {
      toBan.send(`**${toBan.user.tag}** You were banned from **${message.guild.name}**`)
    } else {
      toBan.send(`**${toBan.user.tag}** You were banned from **${message.guild.name}**
Reason: "${reason}"`);
    }
    let embedB = new RichEmbed()
    .setColor('RANDOM')
    .setTitle('User Banned')
    .addField('username', toBan.user.username, true)
    .addField('ID', toBan.id, true)
    message.channel.send(embedB);
  } catch (e) {
    console.log(e.message)
  }
  } else {
   message.channel.send(`Infortunately I cannot ban **${toBan.user.tag}** because the role is higher than mine.`)
  }
}
 
exports.conf = {
  aliases: ['banthx'],
  cooldown: '5'
}

exports.help = {
  name: "ban",
  description: 'Ban Seseorang Dari Servermu [ADMIN ONLY]',
  usage: 'ban [@mention someone]'
}
