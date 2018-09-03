const Discord = require("discord.js");

exports.run = async (client, message, args) => {

let sicon = message.guild.iconURL; // kalau server gunakan icon bukan displayAvatar
            let online = message.guild.members.filter(o => o.presence.status === 'online').size
		let serverembed = new Discord.RichEmbed()
		.setAuthor(message.guild.name, sicon)
		.setThumbnail(sicon)
		.setColor("RANDOM")
		.addField("ID", message.guild.id, true)
		.addField("• Owner", message.guild.owner.user.tag, true)
		.addField("• Nama Server", message.guild.name)
		.addField("• Server Dibuat Sejak", message.guild.createdAt) 
		.addField("• Kamu Join Sejak", message.member.joinedAt)
                .addField("• Region", message.guild.region, true)
                .addField("• Channels", message.guild.channels.size, true)
                .addField("• Jumlah Member", message.guild.memberCount, true)
                .addField("• Jumlah User", message.guild.memberCount - message.guild.members.filter(m => m.user.bot).size, true)
                .addField("• Jumlah Robot", message.guild.members.filter(m => m.user.bot).size, true)
                .addField("• Jumlah User Yang Sedang Online", `${online}`, true)
                .addField("• Jumlah Roles", message.guild.roles.size, true)
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
