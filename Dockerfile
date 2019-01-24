FROM node
COPY . /app
WORKDIR /app
RUN npm install --registry=https://registry.npm.taobao.org
RUN export EGG_SERVER_ENV=test && export NODE_ENV=test 
EXPOSE 3000
CMD npm run start