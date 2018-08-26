# https://hub.docker.com/_/node/
FROM node:9.6

# Copy source code
# TODO: this is not synced when you update files localy
#COPY . /app

# Set the working directory (see docker-compose)
#WORKDIR /app
WORKDIR /app/packages/api

# Install any needed packages specified in package.json
#RUN yarn install --focus

EXPOSE 3000/tcp

# Start application when the container launches
CMD ["yarn", "start"]
