import dotenv from 'dotenv';
import Discord from 'discord.js';
import getResponse from './runCommand.js';
dotenv.config();

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
	const response = await getResponse(content);
	if (response) {
		message.channel.send(response);
	}
	// if (content === 'test') {
	// }
	// if (content === '!commands') {
	// 	message.channel.send(commands.commands);
	// }

	// if (content.indexOf('!villager ') === 0) {
	// 	const searchTerm = content.split('!villager ')[1];
	// 	message.channel.send(constants.nookipediaUrlPrefix + searchTerm);
	// }
});
