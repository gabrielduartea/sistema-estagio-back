FROM node:18

WORKDIR /src


RUN npm ci


COPY . .

RUN npm run build
