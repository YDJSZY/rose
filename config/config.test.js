'use strict';

module.exports = appInfo => {
  const config = exports = {};

  config.sequelize = {
    host: 'rose_test_db',
  };

  config.redis = {
    client: {
      host: 'rose_test_redis', // Redis host
    },
  };

  return config;
};
