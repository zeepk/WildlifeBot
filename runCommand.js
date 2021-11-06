import commandList from './commands.js';
import { startsWith, formatCritterResponse } from './helperFunctions.js';
import fetch from 'node-fetch';

const getResponse = async (message) => {
	const commands = commandList;

	// check to see if the command is in the list of static commands
	const staticCommands = commands.staticCommands;
	const staticCommand = staticCommands.find((cmd) => cmd.command === message);
	if (staticCommand) {
		return staticCommand.response;
	}

	// if not, must be a dynamic command

	// villager/ac/wiki
	if (
		startsWith(message, commands.villager.command) ||
		startsWith(message, commands.ac.command) ||
		startsWith(message, commands.wiki.command)
	) {
		const searchTerm = message.split(' ')[1].replace(/ /g, '_');
		return `${commands.wiki.response}${searchTerm}`;
	}

	// fish
	if (startsWith(message, commands.fish.command)) {
		const response = await fetch(commands.fish.response);
		const apiResponse = await response.json();
		const searchTerm = message
			.split(commands.fish.command)[1]
			.toLowerCase()
			.replace(/ /g, '_');

		const data = apiResponse[searchTerm];
		if (!data) {
			return `Unable to find ${searchTerm} in the fish database.`;
		}

		return formatCritterResponse(data);
	}
	return '';
};
export default getResponse;
