'use strict';

const Service = require('egg').Service;

class UsersService extends Service {
  constructor(ctx) {
    super(ctx);
  }

  async index () {
    try {
      const res = await this.ctx.app.model.Users.findAndCountAll();
      return { success: true, data: { count: res.count, results: res.rows } };
    } catch (err) {
      console.error(new Error(err));
      return { success: false, message: err };
    }
  }
}

module.exports = UsersService;
