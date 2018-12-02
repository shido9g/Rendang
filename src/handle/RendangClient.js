const { Client, Collection } = require('discord.js');

class Rendang extends Client {
  constructor (opt) {
    super (opt);
    
    this.queue = new Collection();
    this.util = new require('./util.js');
  }
}

module.exports = Rendang;
