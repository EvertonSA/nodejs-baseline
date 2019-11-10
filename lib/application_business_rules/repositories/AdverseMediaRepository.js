'use strict';

module.exports = class {
  constructor(repository) {
    this.repository = repository;
  }

  persist(adverseMediaEntity) {
    return this.repository.persist(adverseMediaEntity);
  }

  merge(adverseMediaEntity) {
    return this.repository.merge(adverseMediaEntity);
  }

  remove(adverseMediaId) {
    return this.repository.remove(adverseMediaId);
  }

  get(adverseMediaId) {
    return this.repository.get(adverseMediaId);
  }

  find() {
    return this.repository.find();
  }
};
