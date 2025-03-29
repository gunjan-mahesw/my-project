FROM node:latest

WORKDIR /the/workdir/path

COPY . ./app

RUN npm install

EXPOSE 5500

CMD ["node", "index.js"]
