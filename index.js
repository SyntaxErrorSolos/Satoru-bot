//discord.js stuff
const { Client, GatewayIntentBits, Partials } = require("discord.js");
const { Guilds, GuildMessages, GuildMessageReactions, MessageContent } =
  GatewayIntentBits;
const { User, GuildMember, ThreadMember, Reaction, Message } = Partials;
const client = new Client({
  intents: [Guilds, GuildMessages, GuildMessageReactions, MessageContent],
  partials: [User, GuildMember, ThreadMember, Reaction, Message],
  allowedMentions: { parse: ["users"] },
});

//event Handler
const eventHandler = require("./src/Handler/eventHandler");
eventHandler(client)


//get the token
require("dotenv").config();
const token = process.env.TOKEN;

//throw an error if the token does not exist.
if (!process.env.TOKEN) {
  throw new Error("Token not found in .env file");
}


//Login
client.login(token);
