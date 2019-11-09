'use strict';

const User = require('../../enterprise_business_rules/entities/User');

module.exports = class {
  _initializeRepositoryWithTwoUsers() {
    const john = new User(null, 'John', 'Doe', 'john.doe@mail.com', 'ABCD1234');
    const jane = new User(null, 'Jane', 'Smith', 'jane.smith@mail.com', 'EFGH5678');
    this.persist(john).then(() => this.persist(jane));
  }

  _dataAsArray() {
    return Object.keys(this.data).map((key) => this.data[key]);
  }

  constructor() {
    this.index = 1;
    this.data = {};
    this._initializeRepositoryWithTwoUsers();
  }

  persist(userEntity) {
    const row = Object.assign({}, userEntity);
    const rowId = this.index++;
    row.id = rowId;
    this.data[rowId] = row;
    return Promise.resolve(row);
  }

  merge(userEntity) {
    const row = this.data[userEntity.id];
    Object.assign(row, userEntity);
    return Promise.resolve(row);
  }

  remove(userId) {
    delete this.data[userId];
    return Promise.resolve();
  }

  get(userId) {
    return Promise.resolve(this.data[userId]);
  }

  getByEmail(userEmail) {
    const users = this._dataAsArray();
    return Promise.resolve(users.find((user) => user.email === userEmail));
  }

  find() {
    return Promise.resolve(this._dataAsArray());
  }
};
