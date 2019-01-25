FROM node
COPY . /app
WORKDIR /app
RUN npm install --registry=https://registry.npm.taobao.org
EXPOSE 3000
ENV EGG_SERVER_ENV=prod
CMD export EGG_SERVER_ENV=${EGG_SERVER_ENV} && export NODE_ENV=${EGG_SERVER_ENV} && npm run start