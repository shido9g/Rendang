const { RichEmbed } = require('discord.js');

async function gameBuilder (client, msg, args){
	try{
		if(!args.length){
			const embed = new RichEmbed()
			.setColor('YELLOW')
			.addField('❓ GuessThatNumber [gtn]', 'The bot will give randomly hide number and you must guess it.', true)
			.setFooter('💡 To play game use r!game <gamename>')
			return msg.channel.send(embed);
		}
		const gamename = args[0].toLowerCase();
		if(gamename === 'GuessThatNumber' || gamename === 'gtn'){
			const numberToGuess = Math.floor(Math.random()*100);
			let passes = 10;
			let isWin = false;
			let ans = 'Guess that number!';
			while(passes > 0 && !isWin){
				await msg.channel.send(`${ans}\nyou have \`${passes}\` chance!`);
				const filter = msgs => !isNaN(msgs.content) && msgs.author.id === msg.author.id;
				const response = await msg.channel.awaitMessages(filter, {
					max: 1,
					time: 15000
				});
				if(!response.size){
					await msg.channel.send('Sorry time to guess is up');
					break;
				}
				const choice = parseInt(response.first().content, 10);
				if(choice > numberToGuess){
					ans = '🔻 That number is lower than !'
				}else if(choice < numberToGuess){
					ans = '🔺 That number is higher than !'
				}else{
					isWin = true;
				}
				passes--;
			}
			if(isWin) return msg.channel.send(`You won! it was \`${numberToGuess}\``);
			return msg.channel.send(`Too bad... it was \`${numberToGuess}\``);
		}
	} catch (err) {
		return msg.channel.send(err.stack, { code: 'ini' });
	}
}

this.conf = {
	aliases: [],
	cooldown: 10
}

this.help = {
	name: 'game',
	description: 'play game',
	usage: 'game'
}

this.run = gameBuilder;
