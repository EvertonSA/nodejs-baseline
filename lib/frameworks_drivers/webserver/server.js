'use strict';

const express = require('express')

const createServer = async () => {

  const app = express();

  app.use([
    require('./health'),
  ]);

  return app;
};

module.exports = createServer;
