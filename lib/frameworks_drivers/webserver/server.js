'use strict';

const express = require('express')

const createServer = async () => {

  const app = express();

  app.use([
    require('./health'),
    require('./metrics'),
    require('./adverseMedia'),
  ]);

  return app;
};

module.exports = createServer;
