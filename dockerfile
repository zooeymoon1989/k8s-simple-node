FROM node:alpine

WORKDIR /usr/src/app

EXPOSE 3000

COPY package*.json ./

RUN npm install

COPY index.js .

CMD ["npm","start"]