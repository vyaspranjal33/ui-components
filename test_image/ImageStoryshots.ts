import initStoryshots, { imageSnapshot } from '@storybook/addon-storyshots';
import path from 'path';

const target = path.resolve(__dirname, '../docs');
const targetPath = `file://${target}`;

// const getMatchOptions = ({ context: { kind, story }, url }) => {
//   if (story.includes('[animation]')) {
//     return {
//       failureThreshold: 0.2,
//       failureThresholdType: 'percent',
//     };
//   }
//   return {
//     failureThreshold: 0.05,
//     failureThresholdType: 'percent',
//   };
// };

// DontTest is added to the names of storybook stories
// that render animations/things we dont want to include in imageshots.
initStoryshots({
  //   storyNameRegex: /^((?!.*?DontTest).)*$/,
  suite: 'Image storyshots',
  test: imageSnapshot({ storybookUrl: targetPath }),
});
