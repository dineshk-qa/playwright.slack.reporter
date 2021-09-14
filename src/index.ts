import axios, { AxiosRequestConfig } from 'axios';
import payload from './payload';

const options: AxiosRequestConfig = {
  url: process.env.SLACK_WEBHOOK,
  method: 'post',
  data: payload,
};

const slackReport = async () => axios(options).catch((e) => console.log('Slack Api Error -> ', e.message));
// slackReport();
export default slackReport;
