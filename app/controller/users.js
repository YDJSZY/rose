'use strict';

const Controller = require('egg').Controller;

class UsersController extends Controller {
  async index() {
    const { ctx } = this;
    const res = await ctx.service.users.index(ctx.query);
    ctx.body = res;
  }
}

module.exports = UsersController;
