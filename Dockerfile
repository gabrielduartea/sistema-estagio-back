FROM node:18

WORKDIR /src

COPY package.json ./

RUN npm ci


COPY . .

RUN npm run build
