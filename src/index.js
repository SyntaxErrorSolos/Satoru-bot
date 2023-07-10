const { Client, GatewayIntentBits, Partials } = require("discord.js");
const { Guilds, GuildMessages, GuildMessageReactions, MessageContent } =
  GatewayIntentBits;
const { User, GuildMember, ThreadMember, Reaction, Message } = Partials;
const client = new Client({
  intents: [Guilds, GuildMessages, GuildMessageReactions, MessageContent],
  partials: [User, GuildMember, ThreadMember, Reaction, Message],
  allowedMentions: { parse: ["users"] },
});

require("dotenv");

client.login(process.env.DISCORD_TOKEN);
