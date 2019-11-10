'use strict';

const express = require('express')

const createServer = async () => {

  const app = express();

  app.use([
    require('./Health'),
    require('./Metrics'),
    require('./AdverseMedia'),
  ]);

  return app;
};

module.exports = createServer;
