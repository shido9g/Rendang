const Discord = require('discord.js');

module.exports.run = async (client, message, args) => {

    let specifyembed = new Discord.RichEmbed()
        .setColor(0xF55D5D)
        .setDescription(`${message.author}, Please specify a word or message to embed.`)
        .setTimestamp();

    var text = args.join(" ");
    if (!text) return message.channel.send(specifyembed);

    let embedsay = new Discord.RichEmbed()
        .setColor('RANDOM')
        .setAuthor(message.author.tag, message.author.avatarURL)
        .setDescription(`${text}`);

    message.channel.send(embedsay);
};

exports.conf = {
    aliases: ['embed'],
    cooldown: '5'
};

exports.help = {
    name: "embed",
    description: "Embed Pesan Yang Kamu Mau.",
    usage: "embed [Text Here]"
}
