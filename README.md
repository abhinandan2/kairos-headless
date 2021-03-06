# kairos-headless
Headless Automator Script for Agent Interface Testing

## Installation
1. Clone the repo: ```git clone https://github.com/abhinandan2/kairos-headless.git```

2. Goto the folder: ```cd kairos-headless/```

3. Install Dependencies: ```npm install``` (It will also download the latest version of Google Chrome)

4. CD to kairosHeadless: ```cd kairosHeadless/```

5. Edit the test data with your agents in kairosHeadless/extras using your favourite editor: ```subl extras/loadTestData.js```

6. CD to Main: ```cd main/```

7. Run Automator: ```node automator.js -t firstTest```

## Usage:

#### At anytime, use ```node automator.js -h``` for help
```
  --version          Show version number                               [boolean]
  -t, --test         provide a unique test name. It has alphanumberic. Minimum 4
                     charaters. This will be used in screenshots and console log
                     folder name                                      [required]
  -c, --concurrency  Concurrency to use
  -d, --debug        Start in debug with Headless mode off             [boolean]
  -h, --help         Show help                                         [boolean]

Examples:
  automator.js  -t firstTest
  
 ```

## Structure
  ```kairosHeadless > main > automator.js```: Main Automator Program.

  ```kairosHeadless > logs > *```: Logs for each test is stored here.

  ```kairosHeadless > constants > common.js```: Contain the global constants and feature flags.
  
  ```kairosHeadless > extras > loadTestData.js```: Where the user data to be loaded for testing is stored
  
  ```kairosHeadless > flows > centralAgentLogin.js```: Where the automated login flow of the Central Agent Interface is coded.
