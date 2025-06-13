# Stage 1: Development
FROM node:24-slim as development

WORKDIR /usr/src/app

COPY package*.json ./
RUN npm install

COPY . .

EXPOSE 8080

CMD ["npm", "run", "serve"]

# Stage 2: Production
FROM node:24-slim as production

WORKDIR /usr/src/app

COPY package*.json ./
RUN npm install

COPY --from=development /usr/src/app .

RUN npm run build

RUN npm install -g http-server

EXPOSE 80

CMD ["http-server", "dist"]
