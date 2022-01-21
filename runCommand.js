import commandList from "./commands.js";
import {
  startsWith,
  formatCritterResponse,
  formatVillagerResponse,
} from "./helperFunctions.js";
import { CritterType } from "./constants.js";
import fetch from "node-fetch";

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
    startsWith(message, commands.ac.command) ||
    startsWith(message, commands.wiki.command)
  ) {
    const searchTerm = message.split(" ")[1].replace(/ /g, "_");
    return `${commands.wiki.response}${searchTerm}`;
  }

  // fish
  if (startsWith(message, commands.fish.command)) {
    const response = await fetch(commands.fish.response);
    const apiResponse = await response.json();
    const searchTerm = message
      .split(commands.fish.command)[1]
      .toLowerCase()
      .replace(/ /g, "_");

    const data = apiResponse[searchTerm];
    if (!data) {
      return `Unable to find ${searchTerm} in the fish database.`;
    }

    return formatCritterResponse(data, CritterType.FISH);
  }

  // bugs
  if (startsWith(message, commands.bugs.command)) {
    const response = await fetch(commands.bugs.response);
    const apiResponse = await response.json();
    const searchTerm = message
      .split(commands.bugs.command)[1]
      .toLowerCase()
      .replace(/ /g, "_");

    const data = apiResponse[searchTerm];
    if (!data) {
      return `Unable to find ${searchTerm} in the bugs database.`;
    }

    return formatCritterResponse(data, CritterType.BUGS);
  }

  // sea creatures
  if (startsWith(message, commands.sea.command)) {
    const response = await fetch(commands.sea.response);
    const apiResponse = await response.json();
    const searchTerm = message
      .split(commands.sea.command)[1]
      .toLowerCase()
      .replace(/ /g, "_");

    const data = apiResponse[searchTerm];
    if (!data) {
      return `Unable to find ${searchTerm} in the sea creatures database.`;
    }

    return formatCritterResponse(data, CritterType.SEA);
  }

  // villagers
  if (startsWith(message, commands.villager.command)) {
    const response = await fetch(commands.villager.response);
    const apiResponse = await response.json();
    const searchTerm = message
      .split(commands.villager.command)[1]
      .replace(/(?:^|\s|["'([{])+\S/g, (match) => match.toUpperCase());

    const villagerList = Object.entries(apiResponse).map(
      (keyValuePair) => keyValuePair[1]
    );
    const data = villagerList.find(
      (v) => v["name"]["name-USen"] === searchTerm
    );
    if (!data) {
      return `Unable to find ${searchTerm} in the villagers database.`;
    }

    return formatVillagerResponse(data);
  }

  return "";
};
export default getResponse;
