FROM node:12.14.1-stretch
RUN apt-get update && apt-get install -y curl

WORKDIR /app

COPY tasks ./tasks
COPY workflows ./workflows
COPY boot.js  .
COPY package.json .

# Install Zenaton
RUN curl https://install.zenaton.com | sh

# Launch zenaton initialization script
CMD ["./docker/start"]
