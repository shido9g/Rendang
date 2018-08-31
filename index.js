const Discord = require("discord.js");

var client = new Discord.Client({
  disableEveryone: true,
  disabledEvents: [
    "TYPING_START",
    "USER_NOTE_UPDATE"
  ]
});

client.on("ready", () => {
  console.log(`${client.user.username} IS NOW ONLINE!`)
});

client.on("warn", console.warn);

client.on("error", console.error);

client.on("disconnect", () => console.log("I just disconnected, making sure you know, i will reconnect now..."));

client.on("reconnecting", () => console.log("I am reconnecting now!"));

client.on("message", async message => {
  //CODE GOES HERE
});

client.login("TOKEN")