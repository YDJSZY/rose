'use strict';

module.exports = appInfo => {
  console.log('default')
  const config = exports = {};

  config.cluster = {
    listen: {
      port: 3000,
      hostname: '0.0.0.0',
    },
  };

  config.sequelize = {
    dialect: 'mysql',
    host: '127.0.0.1',
    port: 3306,
    database: 'rose',
    username: 'root',
    password: '12345678',
  };

  config.redis = {
    client: {
      port: 6379, // Redis port
      host: '127.0.0.1', // Redis host
      password: '',
      db: 0,
    },
  };

  // use for cookie sign key, should change to your own and keep security
  config.keys = appInfo.name + '_1548301924702_9499';

  // add your config here
  config.middleware = [];

  return config;
};
