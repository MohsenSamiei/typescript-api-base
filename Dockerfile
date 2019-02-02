FROM node:10.15.0-slim

# Create app directory
WORKDIR /usr/src/app

# Bundle app source
COPY . .

# Install app dependencies
RUN npm install

# Build app source
RUN npm run build

EXPOSE 3000
CMD [ "npm", "start" ]