# Create image based on the official Node image from dockerhub
FROM node:14.15.0-alpine3.10
# Create a directory where our app will be placed
RUN mkdir -p /usr/src/app
# Change directory so that our commands run inside this new directory
WORKDIR /usr/src/app
# Copy dependency definitions
COPY package.json /usr/src/app
# Install dependecies
RUN npm install
# Get all the code needed to run the app
COPY . /usr/src/app
# build angular project
RUN npm run build --prod
# remove node_module
RUN rm -rf node_modules
RUN npm i express
# Expose the port the app runs in
EXPOSE 4200
# Serve the app
CMD ["node", "server.js"]
