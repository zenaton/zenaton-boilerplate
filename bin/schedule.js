const client = require("../client");

// To help you build your cron syntax: https://crontab.guru/

// To check your actual schedules: https://app.zenaton.com/schedules

// WARNING: if you run the script 2 times, you will have 2 schedules !

// Every monday at 1:10 AM
// client.schedule("10 1 * * 1").workflow("MyFirstWorkflow")