const Discord = require("discord.js");

exports.run = async (bot, message, args) => {

let sicon = message.guild.iconURL; // kalau server gunakan icon bukan displayAvatar
		let serverembed = new Discord.RichEmbed()
		.setAuthor("Server Information :")
		.setColor("RANDOM")
		.setThumbnail(sicon)
		.addField("Server Name", message.guild.name)
		.addField("Created At", message.guild.createdAt) 
		.addField("You Joined At", message.member.joinedAt)
		.addField("Owner", message.guild.owner)
    .setFooter(`Requested By : ${message.author.tag}`);

		message.channel.send(serverembed);
    
   }

   exports.conf = {
     aliases: ['server'],
     cooldown: '5'
   
    }
    
    exports.help = {
      name: "help",
      description: 'Melihat Info Server'
      usage: 'serverinfo'
    }
