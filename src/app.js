const Discord = require('discord.js');
const client = new Discord.Client({
  fetchAllMembers: true
});

client.login(TOKEN_GOES_HERE);

require('./handle/events')(client);
require('./handle/module')(client);
