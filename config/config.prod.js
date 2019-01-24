'use strict';

module.exports = appInfo => {
  const config = exports = {};
  
  config.sequelize = {
    host: 'rose_prod_db',
  };

  config.redis = {
    client: {
      host: 'rose_prod_redis', // Redis host
    },
  };

  return config;
};
