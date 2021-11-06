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
			command: '!villager nathan',
			response: `Nathan\n*"yeah Halo sucks, I agree"*\nGender: Tesla\nSpecies: Racecar Driver\nPersonality: Cranky\nBirthday: February 25th\nhttps://s3-us-west-1.amazonaws.com/co-directory-images/nathan-washam-b535aaa6.jpg`,
		},
		{
			command: '!villager emmalee',
			response: `Emily\n*"If you give me a stale churro, I'll kill you 🙂"*\nGender: Female\nSpecies: Cat Lady\nPersonality: Mango\nBirthday: February 15th\nhttps://media-exp1.licdn.com/dms/image/C5603AQEff9dod4cIFg/profile-displayphoto-shrink_200_200/0/1606635782867?e=1640822400&v=beta&t=w9WppBwhVjMZmER8yBcjEaOZTTR_zGDtFLQBMrbXo3o`,
		},
		{
			command: '!villager katelyn',
			response: `Katelyn\n*"I would literally die for literally any dog"*\nGender: Female\nSpecies: Dog Mom\nPersonality: Linus\nBirthday: 4/20 blaze it\nhttps://i.etsystatic.com/iusa/e685da/66439757/iusa_400x400.66439757_8yns.jpg?version=0`,
		},
		{
			command: '!code',
			response: 'https://github.com/zeepk/WildlifeBot',
		},
	],
	villager: {
		command: '!villager ',
		response: 'https://acnhapi.com/v1/villagers',
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
