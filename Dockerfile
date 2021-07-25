FROM node:12.19.0-alpine3.9 AS development

WORKDIR /Users/bquarless/Documents/Projects/Instrument-RestApi/app

COPY package*.json ./

RUN yarn add glob rimraf

RUN yarn  --only=development

COPY . .

RUN yarn run build

FROM node:12.19.0-alpine3.9 as production

ARG NODE_ENV=production
ENV NODE_ENV=${NODE_ENV}

WORKDIR /Users/bquarless/Documents/Projects/Instrument-RestApi

COPY package*.json ./

RUN yarn --only=production

COPY . .

COPY --from=development /Users/bquarless/Documents/Projects/Instrument-RestApi/dist ./dist

CMD ["node", "dist/main"]
