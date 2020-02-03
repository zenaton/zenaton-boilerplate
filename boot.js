// load dependencies
const { workflow, task } = require('zenaton');

// define tasks
task("GetSentence", require("./tasks/getSentence"));
task("LogSentence", require("./tasks/logSentence"));

// define workflows
workflow("HelloWorld", require("./workflows/helloWorld"));
