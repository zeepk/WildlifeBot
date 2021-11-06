require('dotenv').config();
const Discord = require('discord.js');
const constants = require('./constants');
const client = new Discord.Client({
	allowedMentions: {
		parse: ['users', 'roles'],
		repliedUser: true,
	},
	intents: [
		'GUILDS',
		'GUILD_MESSAGES',
		'GUILD_PRESENCES',
		'GUILD_MEMBERS',
		'GUILD_MESSAGE_REACTIONS',
	],
});

client.on('ready', () => {
	console.log('WildlifeBot Running...');
});

client.login(process.env.BOT_TOKEN);

client.on('messageCreate', async (message) => {
	const content = message.content;
	if (!content) {
		return;
	}
	if (content === '!ac') {
		message.channel.send('Hi!');
	}
	if (content.indexOf(constants.COMMAND_PREFIX) === 0 && content.length >= 5) {
		const searchTerm = content.split(constants.COMMAND_PREFIX)[1];
		message.channel.send(searchTerm);
	}
});
