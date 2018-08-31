const Discord = require('discord.js');
const config = require('../../config.json');
exports.run = async (client, message, args) => {
        if(!args[1]){
    let help = new Discord.RichEmbed()
    .setAuthor("Playmoe Correct Usage")
    .addField("listen.moe 🇯🇵",`Please type **${config.bot_prefix}playmoe jp** to play listen.moe jpop`)
    .addField("listen.moe 🇰🇷",`Please type **${config.bot_prefix}playmoe kr** to play listen.moe kpop`)
    .addField("Stop listen.moe",`Please type **${config.bot_prefix}playmoe stop** to stop the current listen.moe")
    .setFooter("Powered by listen.moe","https://imgdb.net/images/4011.png")
    .setColor("RANDOM")
    message.channel.send(help).then(m => m.delete(10000))
  }
  
  if(args[0] == "jp"){
    
        const channel = message.member.voiceChannel;
    if(!channel) return message.channel.send('You must join voiceChannel first');
    channel.join().then(connection => { const dispatcher = connection.playStream('http://listen.moe/opus')})
        
    const jembed = new Discord.RichEmbed()
    .setColor('RANDOM')
    .setDescription('✅ Successfully Playing **listen.moe** 🇯🇵 in Your Channel!\n')
    .setFooter("Powered by listen.moe","https://imgdb.net/images/4011.png")
    .setTimestamp()
    message.channel.send(jembed)
    .then(connection => console.log('Connected!'))
    .catch(console.error);
    }
    if(args[0] == "kr"){
    
        const channel = message.member.voiceChannel;
    if(!channel) return message.channel.send('You must join voiceChannel first');
    channel.join().then(connection => { const dispatcher = connection.playStream('http://listen.moe/kpop/opus')})
        
    const jembed = new Discord.RichEmbed()
    .setColor('RANDOM')
    .setDescription('✅ Successfully Playing **listen.moe** 🇰🇷 in Your Channel!\n')
    .setFooter("Powered by listen.moe","https://imgdb.net/images/4011.png")
    .setTimestamp()
    message.channel.send(jembed)
    .then(connection => console.log('Connected!'))
    .catch(console.error);
    }
  if(args[0] == "stop"){
    let channel = message.member.voiceChannel
    if(!channel) return message.channel.send("you must join VoiceChannel first")
    channel.leave()//.then(message.channel.send(L))
    let L = new Discord.RichEmbed()
    .setColor("GREEN")
    .addField("✅ | Stopping",`Stopping current listen.moe songs!`)
    message.channel.send(L)
  }

}

exports.conf = {
    aliases: ["pmoe"],
    cooldown: "10"
}

exports.help = {
    name: "playmoe",
    description: "playing online radio using listen.moe ",
    usage: "playmoe [jp/kr/stop]"
}
