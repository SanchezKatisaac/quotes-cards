FROM node:20-bullseye-slim

ARG VERSION

WORKDIR /app

COPY package.json .

RUN npm install

COPY . .

EXPOSE 3000
ENV HOST=0.0.0.0
ENV PORT=3000
