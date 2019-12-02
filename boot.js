// load dependencies
const { workflow, task } = require('zenaton')

// load definitions
const MyFirstWorkflow = require("./Workflows/MyFirstWorkflow")
const MyFirstTask = require("./Tasks/MyFirstTask")
const LogTask = require("./Tasks/LogTask")

// apply definitions
workflow("MyFirstWorkflow", MyFirstWorkflow)
task("MyFirstTask", MyFirstTask)
task("LogTask", LogTask)
