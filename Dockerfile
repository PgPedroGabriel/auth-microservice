FROM node:10-alpine

WORKDIR /usr/app

COPY . .

RUN rm -rf node_modules

RUN yarn install
