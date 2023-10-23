FROM node:17 as angular
WORKDIR /app
COPY package.json /app
RUN npm install --force
COPY . .
RUN npm run build

FROM nginx:alpine
VOLUME /var/cache/ngix
COPY --from=angular /app/dist/web-imobiliaria /usr/share/nginx/html
COPY ./config/nginx.conf /etc/nginx/conf.d/default.conf
