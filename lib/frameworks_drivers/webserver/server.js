'use strict';

const express = require('express')
const {
  express: middleware
} = require("@banzaicloud/service-tools").middleware;


const Package = require('../../../package');

const createServer = async () => {

  const app = express();

  app.get("/health/liveness", middleware.healthCheck([checkDB]));
  
  app.get(
    "/health/readiness",
    middleware.healthCheck([initFinished, checkDB, canAcceptMoreRequests])
  );

  // Register custom plugins
  await app.use([
    require('./oauth'),
    require('./hello'),
    require('./private'),
    require('./users'),
  ]);

  return server;
};

module.exports = createServer;
