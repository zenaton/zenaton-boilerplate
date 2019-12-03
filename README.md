## Deploy on Heroku

Click this button [![Deploy](https://www.herokucdn.com/deploy/button.svg)](https://heroku.com/deploy?template=https://github.com/zenaton/marketing-workflows), then fill in the env variables and click deploy.

Check that your agent is running properly here: https://app.zenaton.com/agents

Locally, start an agent in client-mode to launch workflow

```
zenaton start
zenaton listen --boot=boot.js --node --client
```

Launch a workflow
```
node launch.js
```



## Run with docker

Install dependencies.
```
yarn
```

Fill-in your credentials
```
cp .env.sample .env
```

Start your Agent
```
docker-compose up
```

Check that your agent is running properly here: https://app.zenaton.com/agents

Launch a workflow
```
node launch.js
```