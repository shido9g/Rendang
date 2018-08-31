const PREFIX = require('../config.json').bot_prefix;

module.exports = async (client, message) => {
    if (message.author.bot || !message.guild) return;

    let prefix = PREFIX.toLowerCase();
    let msg = message.content.toLowerCase();
    
    if (msg.startsWith(prefix)) return require('../handle/command')(client, message);
    if (msg == `<@${client.user.id}>` || msg == `<@!${client.user.id}>`) {
        message.reply('Hai :wave:');
    }
}
