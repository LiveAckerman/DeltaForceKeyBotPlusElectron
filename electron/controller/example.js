'use strict';

const { logger } = require('ee-core/log');
const { exampleService } = require('../service/example');
const jsonDatabase = require('../service/jsonDatabase');

/**
 * example
 * @class
 */
class ExampleController {

  /**
   * 所有方法接收两个参数
   * @param args 前端传的参数
   * @param event - ipc通信时才有值。详情见：控制器文档
   */

  /**
   * test
   */
  async test () {
    const result = await exampleService.test('electron');
    logger.info('service result:', result);

    return 'hello electron-egg';
  }

  async addUser(args) {
    return jsonDatabase.addUser(args);
  }

  async getUsers() {
    return jsonDatabase.getUsers();
  }

  async updateUser(args) {
    const { id, ...updatedUser } = args;
    return jsonDatabase.updateUser(id, updatedUser);
  }

  async deleteUser(args) {
    return jsonDatabase.deleteUser(args.id);
  }
}
ExampleController.toString = () => '[class ExampleController]';

module.exports = ExampleController;