import fs from 'fs';
import { COMMANDS, Qna } from '../../types';

const FINAL_FILE_NAME = 'trainedData.json';

(async () => {
  const contentFilenames = await fs.readdirSync('./src/qna/content/');
  const trainingDataArray = [];
  const commands = [];

  for (const filename of contentFilenames) {
    if (!filename) {
      continue;
    }

    if (filename.includes(COMMANDS)) {
      continue;
    }

    const contentData: { default: Qna } = await import(`./content/${filename}`);

    if (!contentData) {
      continue;
    }

    trainingDataArray.push(contentData.default);
    
    commands.push(`>${contentData.default.id} \n`);
  }

  if (trainingDataArray.length === 0) {
    throw new Error('Training Data Array is empty.');
  }

  const commandsImport = await import(`./content/${COMMANDS}`);

  commandsImport.default.answers = `**List of available commands** \n ${commands.join(
    ' '
  )}`;

  trainingDataArray.push(commandsImport.default);

  fs.writeFileSync(
    `./src/qna/${FINAL_FILE_NAME}`,
    JSON.stringify(trainingDataArray)
  );
})();
