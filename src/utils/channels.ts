import { Message } from 'discord.js';
import config from '../config';

export const isMessageSubmittedInDisallowedChannel = (message: Message) =>
  config.disallowedChannels.find((channel) => message.channelId === channel);

export const isMessageSubmittedInAllowedChannel = (message: Message) =>
  config.allowedChannels.find((channel) => message.channelId === channel);
