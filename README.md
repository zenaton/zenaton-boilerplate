## Deploy on Heroku

Click this button [![Deploy](https://www.herokucdn.com/deploy/button.svg)](https://heroku.com/deploy), then fill in the env variables and click deploy.

Check that your agent is running properly here: https://app.zenaton.com/agents

Then, to launch a workflow from your computer:

install dependencies (only the first time)
```
yarn
```

and then launch a workflow
```
node bin/launch.js
```



## Run with docker

Create your .env
```
cp .env.sample .env
```
...and fill-in your credentials.

Start Zenaton
```
cd docker && docker-compose up
```

Check that your agent is running properly here: https://app.zenaton.com/agents

Launch a workflow
```
node launch.js
```
