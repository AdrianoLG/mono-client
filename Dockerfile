FROM node:14 AS base
WORKDIR /mono/src/app
COPY package*.json ./
COPY . .
RUN npm install

FROM base AS development
ARG NODE_ENV=development
ENV NODE_ENV=${NODE_ENV}

FROM base AS production
ARG NODE_ENV=production
ENV NODE_ENV=${NODE_ENV}