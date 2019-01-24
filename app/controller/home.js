'use strict';

const Controller = require('egg').Controller;

class HomeController extends Controller {
  async index() {
    console.log(process.EGG_SERVER_ENV)
    this.ctx.body = 'hi, egg';
  }
}

module.exports = HomeController;
