const Discord = require('discord.js');
const client = new Discord.Client({
  fetchAllMembers: true,
  disabledEvents: ["TYPING_START", "USER_NOTE_UPDATE"],
  disableEveryone: true
});

client.login(TOKEN_GOES_HERE);

require('./handle/events')(client);
require('./handle/module')(client);
