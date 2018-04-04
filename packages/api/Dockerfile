# https://hub.docker.com/_/node/
FROM node:9.6

# Set the working directory
WORKDIR /app/packages/api

# Copy the current directory contents into the container at /app
#ADD . /app

# Install any needed packages specified in package.json
#RUN yarn install

# Make port 3000 available to the world outside this container
EXPOSE 3000

# Start application when the container launches
CMD ["yarn", "start"]
