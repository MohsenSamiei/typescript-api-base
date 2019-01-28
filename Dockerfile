FROM node:lts-slim

# Create app directory
WORKDIR /usr/src/app

# Bundle app source
COPY . .

# Install app dependencies
RUN npm install

# Build app source
RUN npm run build

EXPOSE 80
CMD [ "npm", "start" ]