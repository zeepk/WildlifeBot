const commandList = {
	staticCommands: [
		{
			command: '!commands',
			response:
				'Some things you can ask me!\n`!commands` - list of commands (but you already figured that one out, nice!)\n`!villager {villager name}` - link to the Nookipedia page for the village, eg. `!villager maple`',
		},
		{
			command: '!test',
			response: 'Test failed successfully',
		},
		{
			command: '!nathan',
			response:
				'https://s3-us-west-1.amazonaws.com/co-directory-images/nathan-washam-b535aaa6.jpg',
		},
		{
			command: '!code',
			response: 'https://github.com/zeepk/WildlifeBot',
		},
	],
	villager: {
		command: '!villager ',
		response: 'https://nookipedia.com/wiki/',
	},
	wiki: {
		command: '!wiki ',
		response: 'https://nookipedia.com/wiki/',
	},
	ac: {
		command: '!ac ',
		response: 'https://nookipedia.com/wiki/',
	},
	fish: {
		command: '!fish ',
		response: 'https://acnhapi.com/v1/fish',
	},
	bugs: {
		command: '!bugs ',
		response: 'https://acnhapi.com/v1/bugs',
	},
	sea: {
		command: '!sea ',
		response: 'https://acnhapi.com/v1/sea',
	},
};

export default commandList;
