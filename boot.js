// load dependencies
const { workflow, task } = require('zenaton');

// define tasks
task("myFirstTask", require("./tasks/myFirstTask"));

// define workflows
workflow("myFirstWorkflow", require("./workflows/myFirstWorkflow"));
