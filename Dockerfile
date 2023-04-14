FROM node:16

WORKDIR /src/app

COPY package*.json ./

RUN npm install

COPY . .

EXPOSE 1234
CMD ["node", "app/index.js"]