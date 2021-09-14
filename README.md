# playwright slack reporter
this is a playwright reporter to send results in slack

### Export Env Vars
**Pre-requisite** - 
Since this reporter takes `json` format report as input so json reporter needs to be configured in `playwright.config.ts`
 ```reporter: [
      ['json', { outputFile: '__dirname/output/results.json' }],
  ],```

- Following env vars need to set before running the server  
SLACK_WEBHOOK - where the reporter will post the results

