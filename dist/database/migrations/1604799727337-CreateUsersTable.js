"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.CreateUsersTable1604799727337 = void 0;

var _typeorm = require("typeorm");

class CreateUsersTable1604799727337 {
  async up(queryRunner) {
    await queryRunner.createTable(new _typeorm.Table({
      name: 'users',
      columns: [{
        name: 'id',
        type: 'nvarchar',
        isPrimary: true
      }, {
        name: 'email',
        type: 'nvarchar',
        isUnique: true
      }, {
        name: 'password',
        type: 'nvarchar'
      }]
    }));
  }

  async down(queryRunner) {
    await queryRunner.dropTable('users');
  }

}

exports.CreateUsersTable1604799727337 = CreateUsersTable1604799727337;