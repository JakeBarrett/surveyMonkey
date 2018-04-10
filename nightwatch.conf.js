const properties = require('./nightwatch.props')
module.exports = {
    "src_folders" : "tests",
    "custom_commands_path": "",
    "custom_assertions_path": "",
    "page_objects_path": "page-objects",
    "globals_path": "",
    
  
    "selenium" : {
      "start_process" : true,
      "server_path" : properties.resourcePath + properties.seleniumServer,
      "log_path" : "",
      "port" : 4445,
      "cli_args" : {
        "webdriver.chrome.driver" : properties.resourcePath + properties.chromedriver,
      }
    },
  
    "test_settings" : {
      "default" : {
        "launch_url" : "https://www.surveymonkey.com",
        "selenium_port"  : 4445,
        "selenium_host"  : "localhost",
        "silent": true,
        "screenshots" : {
          "enabled" : false,
          "path" : ""
        },
        "desiredCapabilities": {
          "browserName": "chrome",
        }
      },
  
      "firefox" : {
        "desiredCapabilities": {
          "browserName": "firefox",
          "marionette": true
        }
      },
  
      "edge" : {
        "desiredCapabilities": {
          "browserName": "MicrosoftEdge"
        }
      }
    }
  }