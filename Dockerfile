# Pull the Node image from Docker Hub
FROM node:14.5.0-alpine

# Setting Working Directory
WORKDIR /usr/app

COPY . .

# Install Dependencies
RUN npm i


RUN cd server && npm i
RUN npm --prefix server run build
#RUN npm --prefix server run start -d



RUN cd ..
RUN cd client
RUN npm --prefix client i
RUN npm --prefix client run build

EXPOSE 3000

# Run the API on Nodemon
#CMD ["npm", "run", "dev"]
CMD ["npm", "--prefix", "client", "run", "start"]