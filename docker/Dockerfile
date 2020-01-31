FROM node

WORKDIR /app

RUN curl https://install.zenaton.com | sh


#RUN mkdir -p /app/workflows
#RUN mkdir -p /app/tasks

#COPY ./workflows/* /app/workflows/
#COPY ./tasks/* /app/tasks/
#COPY ./boot.js /app
#COPY ./package.json /app
#COPY ./docker/launch_agent.sh .

# install deps
RUN yarn
#RUN chmod +x launch_agent.sh

ENTRYPOINT ["sh", "/app/docker/launch_agent.sh"]