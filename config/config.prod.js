'use strict';

module.exports = appInfo => {
  const config = exports = {};
  
  config.sequelize = {
    host: 'db',
  };

  config.redis = {
    client: {
      host: 'redis', // Redis host
    },
  };

  return config;
};
