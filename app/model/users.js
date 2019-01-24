'use strict';

module.exports = app => {
  const Sequelize = app.Sequelize;

  const Users = app.model.define('users', {
    id: { type: Sequelize.INTEGER, primaryKey: true, autoIncrement: true },
    username: Sequelize.STRING(32),
    age: Sequelize.INTEGER,
    created_at: Sequelize.DATE,
    updated_at: Sequelize.DATE,
  });
  return Users;
};
