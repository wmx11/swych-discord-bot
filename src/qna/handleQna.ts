import { Message } from 'discord.js';
import trainedData from './trainedData.json';
import { Qna } from '../../types';
import { isMessageSubmittedInDisallowedChannel } from '../utils/channels';

// Cache the data
const data = trainedData;

const getAnswer = (answers: Qna['answers']) => {
  if (Array.isArray(answers)) {
    return answers.at(Math.round(Math.random() * answers.length));
  }

  return answers;
};

export default function (message: Message) {
  if (isMessageSubmittedInDisallowedChannel(message)) {
    return;
  }

  const messageContent = message?.content?.toLowerCase() ?? '';

  const answer = data.find((qnaItem) => {
    return qnaItem.keywords.find(
      (phrase) =>
        messageContent.includes(phrase.toLowerCase()) ||
        messageContent.includes(`>${qnaItem.id.toLowerCase()}`)
    );
  });

  if (!answer) {
    return;
  }

  if (!answer?.enabled) {
    return;
  }

  if (answer.reactions.length) {
    try {
      answer.reactions.forEach((reaction) => {
        message.react(reaction);
      });
    } catch (error) {
      console.error('Could not react to the message', error);
    }
  }

  if (answer.answers) {
    try {
      const finalAnswer = getAnswer(answer.answers);

      if (!finalAnswer) {
        return;
      }

      if (answer.deleteCallerMessage) {
        message.delete();
      }

      if (message.mentions.repliedUser && answer.allowUserTag) {
        message.channel.send(
          `Hey <@${message.mentions.repliedUser.id}>, ${finalAnswer}`
        );
        return;
      }

      message.reply(finalAnswer);
    } catch (error) {
      console.error('Could not reply to the message', error);
    }
  }
}
