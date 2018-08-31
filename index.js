const Discord = require("discord.js");

var client = new Discord.Client({
  disableEveryone: true,
  disabledEvents: [
    "TYPING_START",
    "USER_NOTE_UPDATE"
  ]
});