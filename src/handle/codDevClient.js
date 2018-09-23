const { Client, Collection } = require('discord.js');

class codDevBot extends Client {
  constructor (opt) {
    super (opt);
    
    this.queue = new Collection();
  }
}

module.exports = codDevBot;
