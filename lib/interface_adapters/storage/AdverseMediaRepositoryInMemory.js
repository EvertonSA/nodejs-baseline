'use strict';

const AdverseMedia = require('../../enterprise_business_rules/entities/AdverseMedia');

module.exports = class {
  _initializeRepositoryWithTwoAdverseMedias() {
    const news1 = new AdverseMedia(null, 'Bush scandal', 'John Doe scandal somewhere', 'fraud,corruption', '02/02/0002', 'https://somelink.com');
    const news2 = new AdverseMedia(null, 'Jane Smith scandal', 'Jane Smith scandal somewhere', 'fraud,corruption', '02/02/0002', 'https://somelink.com');
    this.persist(news1).then(() => this.persist(news2));
  }

  _dataAsArray() {
    return Object.keys(this.data).map((key) => this.data[key]);
  }

  constructor() {
    this.index = 1;
    this.data = {};
    this._initializeRepositoryWithTwoAdverseMedias();
  }

  persist(adverseMediaEntity) {
    const row = Object.assign({}, adverseMediaEntity);
    const rowId = this.index++;
    row.id = rowId;
    this.data[rowId] = row;
    return Promise.resolve(row);
  }

  merge(adverseMediaEntity) {
    const row = this.data[adverseMediaEntity.id];
    Object.assign(row, adverseMediaEntity);
    return Promise.resolve(row);
  }

  remove(adverseMediaId) {
    delete this.data[adverseMediaId];
    return Promise.resolve();
  }

  get(adverseMediaId) {
    return Promise.resolve(this.data[adverseMediaId]);
  }

  find() {
    return Promise.resolve(this._dataAsArray());
  }
};
