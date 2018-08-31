// memanggil package 
const Discord = require('discord.js');

// variable berjalan 
var client = new Discord.Client({ disableEveryone: true }); //jadi botnya gk bakal bisa tag @everyone

// Ready event
client.on('ready', () => {
  // ini bakal ke log di console
  console.log(`${client.user.username} Sudah ONLINE`); // => ex: CodDev Sudah ONLINE
 });

// login ke discord 
client.login('SUPER');
 
