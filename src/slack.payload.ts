import glob from 'fast-glob';
import appRoot from 'app-root-path';
import fs from 'fs';

const slackPayload = (testEnv:string) => {
  const rootDir = appRoot.path;
  const resultFilePath = glob.sync(`${rootDir}/**/results.json`);
  const results = JSON.parse(fs.readFileSync(resultFilePath[0]).toString());
  const body = {
    blocks: [
      {
        type: 'divider',
      },
      {
        type: 'context',
        elements: [
          {
            type: 'mrkdwn',
            text: `:point_right: *Zip critical user journeys finished running on: ${testEnv}!* :muscle:\n\n*Pipeline URL*: ${process.env.JOB_URL}\n\n`,
          },
        ],
      },
      {
        type: 'section',
        text: {
          type: 'mrkdwn',
          text: '*Here are the Results:* :point_down:',
        },
      },
      {
        type: 'divider',
      },
    ],
  };
  results.suites.forEach((suite: any) => {
    const { title } = suite.specs[0];
    const timeTook = suite.specs[0].tests[0].results[0].duration / 1000;
    if (timeTook < 5) {
      body.blocks.push({
        type: 'section',
        text: {
          type: 'mrkdwn',
          text: `:face_with_monocle: *"${title}"* is skipped`,
        },
      });
    } else if (suite.specs[0].ok) {
      body.blocks.push({
        type: 'section',
        text: {
          type: 'mrkdwn',
          text: `:tada: *"${title}"* passed!`,
        },
      });
    } else {
      body.blocks.push({
        type: 'section',
        text: {
          type: 'mrkdwn',
          text: `:x: *"${title}"* failed!`,
        },
      });
    }
  });
  body.blocks.push({ type: 'divider' });
  return body;
};
export default slackPayload;
