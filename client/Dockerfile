# Dockerfile for React client

# Build react client
FROM node:14.5.0-alpine

# Working directory be app
WORKDIR /usr/src/app

# copy local files to app folder
COPY . .

###  Installing dependencies

RUN npm install --silent
RUN npm install -g webpack
RUN npm uninstall node-sass && npm install -g node-sass
RUN npm run build

EXPOSE 3000

CMD ["npm", "run", "start"]