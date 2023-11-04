FROM node:alpine

RUN apk update && apk add ffmpeg

WORKDIR /app

COPY package*.json .
RUN npm install

COPY . .

EXPOSE 3000

CMD npm run dev