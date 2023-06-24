import fs from 'fs';
import { Qna } from '../../types';

const FINAL_FILE_NAME = 'trainedData.json';

(async () => {
  const contentFilenames = await fs.readdirSync('./src/qna/content/');
  const trainingDataArray = [];

  for (const filename of contentFilenames) {
    if (!filename) {
      continue;
    }

    const contentData: { default: Qna } = await import(`./content/${filename}`);

    if (!contentData) {
      continue;
    }

    trainingDataArray.push(contentData.default);
  }

  if (trainingDataArray.length === 0) {
    throw new Error('Training Data Array is empty.');
  }

  fs.writeFileSync(
    `./src/qna/${FINAL_FILE_NAME}`,
    JSON.stringify(trainingDataArray)
  );
})();
