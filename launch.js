const client = require('./client')

const params = { name: 'foo' }

// dispatch a workflow to be processed in background
client.run.workflow("MyFirstWorkflow", params)