FROM node:12.14-alpine

WORKDIR /usr/src
COPY package.json .
RUN npm install --no-package-lock

WORKDIR /usr/src/app
