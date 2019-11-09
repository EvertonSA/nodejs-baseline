'use strict';

const express = require('express')

const createServer = async () => {

  const app = express();

  // Register custom routers
  await app.register([
    require('./health'),
    require('./hello'),
    require('./users'),
  ]);

  return app;
};

module.exports = createServer;
