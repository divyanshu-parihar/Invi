const { Client, Intents, Message } = require("discord.js");
import intialinitializeMongoDB from "../src/services/database/index";
import config from "config";
const client = new Client({
  intents: [Intents.FLAGS.GUILDS, Intents.FLAGS.GUILD_MESSAGES],
});

client.on("messageCreate", (message: typeof Message) => {
  if (message.content === "ping") {
    message.channel.send("pong");
  }
});

client.on("ready", () => {
  console.log(`Logged in as ${client.user.tag}!`);
});
intialinitializeMongoDB();
client.login(config.get("app.token"));
