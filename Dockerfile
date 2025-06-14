# Stage 1: Development
FROM node:24-slim AS development
WORKDIR /app
COPY package*.json ./
RUN npm install
COPY . .
RUN npm run build
EXPOSE 5173
CMD ["npm", "run", "dev", "--", "--host"]

# Stage 2: Production
FROM nginx:stable-alpine AS production
VOLUME /var/log/nginx
COPY ./docker/nginx.conf /etc/nginx/conf.d/default.conf
COPY --from=development /app/dist /usr/share/nginx/html
EXPOSE 8080
CMD ["nginx", "-g", "daemon off;"]
