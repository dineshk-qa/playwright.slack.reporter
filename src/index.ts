import axios, { AxiosRequestConfig } from 'axios';
import slackPayload from './slack.payload';

/**
 * Expects result file to be called "results.json"
 * webhookUrl: slack webhook url
 * testEnv: To publish in Slack where your results are run
 */
async function slackReport(webhookUrl: string, testEnv:string) {
  const options: AxiosRequestConfig = {
    url: webhookUrl,
    method: 'post',
    data: slackPayload(testEnv),
  };
  axios(options).catch((e) => console.log('Slack Api Error -> ', e.message));
}
export default slackReport;
