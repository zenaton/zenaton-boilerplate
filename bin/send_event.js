const client = require("../client");

const workflow_id = 123;

function sleep(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

async function sequence_of_events() {
  await sleep(2000);

  client.select
    .workflow("MyFirstWorkflow")
    .withTag(workflow_id)
    .send("MyEvent_1", {foo: 'bar'});

  await sleep(5000);

  client.select
    .workflow("MyFirstWorkflow")
    .withTag(workflow_id)
    .send("MyEvent_2", {bar: 'baz'});
}

sequence_of_events();
