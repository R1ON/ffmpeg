FROM node:alpine

RUN apk update && apk add ffmpeg

WORKDIR /app

ARG REALIZATION
ARG PATH_TO_SOURCE

COPY ${REALIZATION}/package*.json .
RUN npm install

COPY .env .
COPY sources ./sources
COPY ${REALIZATION}/ .

EXPOSE 3000

CMD npm run start