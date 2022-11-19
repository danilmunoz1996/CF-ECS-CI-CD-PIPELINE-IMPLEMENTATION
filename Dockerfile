# Pull the Node image from Docker Hub
FROM node:14-slim

# Setting Working Directory
WORKDIR /usr/app

COPY . .

# Install Dependencies
RUN npm install

EXPOSE 3080

# Run the API on Nodemon
CMD ["npm", "run", "dev"]