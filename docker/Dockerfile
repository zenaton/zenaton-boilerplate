FROM node:14.0.0-stretch

WORKDIR /app

COPY package.json yarn.lock ./

RUN yarn --frozen-lockfile

COPY . .

# Install Zenaton
RUN curl https://install.zenaton.com | sh

# Launch zenaton initialization script
CMD ["./docker/start"]
