import results from '../output/results.json';

console.log(__dirname);
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
          text: `:point_right: *Zip critical user journeys finished running on: ${process.env.TEST_ENV}!* :muscle:\n\n*Pipeline URL*: ${process.env.JOB_URL}\n\n`,
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

export default body;
