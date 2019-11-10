'use strict';

// Structured JSON logger https://banzaicloud.com/blog/nodejs-in-production/
const { logger } = require("@banzaicloud/service-tools");

const express = require('express')

const createServer = async () => {

  logger.info("initiating express app");
  const app = express();
  logger.info("loading routers to express app");
  app.use([
    require('./health'),
    require('./metrics'),
    require('./adversemedia'),
  ]);

  return app;
};

module.exports = createServer;
