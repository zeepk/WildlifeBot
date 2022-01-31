import dotenv from "dotenv";
import Discord from "discord.js";
import express from "express";
import getResponse from "./runCommand.js";
dotenv.config();

const client = new Discord.Client({
  allowedMentions: {
    parse: ["users", "roles"],
    repliedUser: true,
  },
  intents: [
    "GUILDS",
    "GUILD_MESSAGES",
    "GUILD_PRESENCES",
    "GUILD_MEMBERS",
    "GUILD_MESSAGE_REACTIONS",
  ],
});

client.on("ready", () => {
  console.log("WildlifeBot Running...");
});

client.login(process.env.BOT_TOKEN);

client.on("messageCreate", async (message) => {
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

var app = express();
app.post("/release/:name", function (req, res) {
  const name = req.params.name;
  const message = `A new release has been published for AC Wildlife: ${name}\nCheck out the details here: https://github.com/zeepk/Wildlife/releases/latest`;
  client.channels.cache.get("931619999108448296").send(message);
  res.send("hello world");
});
app.post("/push", function (req, res) {
  console.log(req);
  client.channels.cache
    .get("933990639178252308")
    .send(
      "A new push has been published for AC Wildlife\nCheck out the latest version of the code here: https://github.com/zeepk/Wildlife"
    );
  res.send("hello world");
});
app.post("/send", function (req, res) {
  console.log(req);
  client.channels.cache.get("933990639178252308").send("howdy");
  res.send("hello world");
});
app.listen(process.env.PORT || 8000, () =>
  console.log("app listening on port 8000")
);
