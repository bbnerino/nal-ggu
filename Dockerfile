FROM node:16.13.2 as build-stage
RUN mkdir /app
WORKDIR /app
EXPOSE 3000 
RUN chmod -R 777 /app

COPY package*.json ./
RUN yarn install
COPY . .
RUN yarn build

FROM nginx:stable-alpine as production-stage

RUN rm /etc/nginx/conf.d/default.conf
COPY  ./nginx.conf /etc/nginx/conf.d

COPY --from=build-stage /app/build /usr/share/nginx/html
CMD ["nginx", "-g", "daemon off;"]