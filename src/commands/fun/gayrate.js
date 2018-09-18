let { owners_id } = require('../../../src/config');

exports.run = async (client, message, args) => {

let myMention = message.mentions.users.first() || client.users.get(args[0]);



  const randomnumber = Math.floor(Math.random() * 101)
  if (message.content === '') {
    message.channel.send({
      embed: {
        author: {
          name: message.author.username,
          icon_url: message.author.avatarURL
        },
        title: 'Scanning...',
        thumbnail: {
          url: message.author.avatarURL
        },
        description: `${message.author.username} memiliki ${randomnumber}% gay! :gay_pride_flag:`,
        color: 9384170,
        timestamp: new Date(),
        footer: {
          icon_url: message.author.avatarURL
        }
      }
    })
  }
  else if (myMention.id === owners_id) {
    const random = Math.floor(Math.random() * 2)


    message.channel.send({
      embed: {
        author: {
          name: myMention.username,
          icon_url: myMention.avatarURL
        },
        title: 'Scanning...',
        thumbnail: {
          url: myMention.avatarURL
        },
        description: `${myMention.username} memiliki ${random}% gay! :gay_pride_flag:`,
        color: 9384170,
        timestamp: new Date(),
        footer: {
          icon_url: myMention.avatarURL
        }
      }
    })
  }

  else if (myMention.id !== owners_id) {
    message.channel.send({
      embed: {
        author: {
          name: myMention.username,
          icon_url: myMention.avatarURL
        },
        title: 'Scanning...',
        thumbnail: {
          url: myMention.avatarURL
        },
        description: `${myMention.username} memiliki ${randomnumber}% gay! :gay_pride_flag:`,
        color: 9384170,
        timestamp: new Date(),
        footer: {
          icon_url: myMention.avatarURL
        }
      }
    })
  }

}

exports.conf = {
    aliases: ['gay'],
    cooldown: "5"
}

exports.help = {
    name: "gayrate",
    description: "Ada temanmu 'gay'? haha ayo liat berapa persen 'gay' dia.",
    usage: "rategay <@mention>"
}
