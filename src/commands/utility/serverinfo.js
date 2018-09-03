const Discord = require("discord.js");

exports.run = async (bot, message, args) => {

let sicon = message.guild.iconURL; // kalau server gunakan icon bukan displayAvatar
		let serverembed = new Discord.RichEmbed()
		.setAuthor("Server Information :")
		.setColor("RANDOM")
		.setThumbnail(sicon)
		.addField("Nama Server", message.guild.name)
		.addField("Server Dibuat Sejak", message.guild.createdAt) 
		.addField("Kamu Join Sejak", message.member.joinedAt)
		.addField("Owner Server", message.guild.owner)
    .setFooter(`Requested By : ${message.author.tag}`);

		message.channel.send(serverembed);
    
   }

   exports.conf = {
     aliases: ['server'],
     cooldown: '5'
   
    }
    
    exports.help = {
      name: "serverinfo",
      description: 'Melihat Info Server',
      usage: 'serverinfo'
    }
