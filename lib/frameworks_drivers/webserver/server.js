'use strict';

const express = require('express')

const createServer = async () => {

  const app = express();

  app.use([
    require('./Health.js'),
    require('./Metrics.js'),
    require('./AdverseMedia.js'),
  ]);

  return app;
};

module.exports = createServer;
