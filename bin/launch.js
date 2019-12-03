const client = require('./client');

const workflow_id = 123;
const params = { name: 'foo' };

client.run.withTag(workflow_id).workflow("MyFirstWorkflow", params);