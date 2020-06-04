# Catalogue structure

```cd BestNotes```

Run command to install dependencies:
```yarn``` or ```npm install```

# Run Webdriver.IO tests locally
To run WebdriverIO tests locally, execute:
```./node_modules/.bin/wdio run ./test/config/base.conf.js```

If you want your tests have a specific suite of tests execute:
```./node_modules/.bin/wdio run ./test/config/base.conf.js --suite=login```

We should combine it with another suites - example:
```./node_modules/.bin/wdio run ./test/config/base.conf.js --suite=login --suite=note```

Tests should work in Chrome version 83