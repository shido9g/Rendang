const PREFIX = require('../config.json').bot_prefix;

module.exports = async (client, message) => {
    if (message.author.bot || !message.guild) return;

    let prefix = PREFIX.toLowerCase();
    let msg = message.content.toLowerCase();
    
    if (msg.startsWith(prefix)) {
        try {
        require('../handle/command')(client, message);
        } catch(e) {
            console.error(e)
        } finally {
            console.info(`${message.author.tag}[${message.author.id}] is using ${message.content.split(" ")[0].replace(PREFIX, '')} command on ${message.guild.name}[${message.guild.id}]`)
        }
    } 
    if (msg == `<@${client.user.id}>` || msg == `<@!${client.user.id}>`) {
        message.channel.send(`:wave: | Hai ${message.author}, prefix ku di server ini adalah ${prefix}`);
    }
}
