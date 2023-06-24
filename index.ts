import dotenv from 'dotenv';
import { Client, GatewayIntentBits } from 'discord.js';
import handleQna from './src/qna/handleQna';

dotenv.config();

const client = new Client({
  intents: [
    GatewayIntentBits.MessageContent,
    GatewayIntentBits.Guilds,
    GatewayIntentBits.GuildMessages,
  ],
});

client.once('ready', () => {
  console.log('Discord Bot Ready');
});

client.on('messageCreate', async (message) => {
  if (message.author.bot) {
    return;
  }

  handleQna(message);
});

client.login(process.env.DISCORD_TOKEN);
