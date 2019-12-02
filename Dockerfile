FROM node

RUN curl https://install.zenaton.com | sh

WORKDIR /app

RUN mkdir -p /app/Workflows
RUN mkdir -p /app/Tasks

COPY ./Workflows/* /app/Workflows/
COPY ./Tasks/* /app/Tasks/
COPY ./client.js /app
COPY ./boot.js /app
COPY ./launch_zenaton_agent.sh /app

# install deps
RUN yarn
RUN chmod +x /app/launch_zenaton_agent.sh

ENTRYPOINT ["sh", "/app/launch_zenaton_agent.sh"]