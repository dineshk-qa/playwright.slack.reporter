# playwright slack reporter
This is a playwright reporter to send results to a specific slack channel

**Pre-requisite**  
Since this reporter takes `json` format report as input, so JSON reporter needs to be configured in `playwright.config.ts`
  ```
  reporter: [
      ['json', { outputFile: 'results.json' }],
    ]
```
NOTE - The JSON result file name must be `results.json`
